import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subject, filter, fromEvent, merge, take, takeUntil, takeWhile, tap } from 'rxjs';
import { CeColorUtils } from '../../../../utilities';
import { CeGradientColorPosition } from '../gradient';
import { CeGradientComponent } from '../gradient.component';
import { CeColorPickerState, CeColorPickerStateService } from '../../color-picker-state.service';

@Component({
  selector: 'ce-gradient-picker',
  templateUrl: './gradient-picker.component.html',
  styleUrls: ['./gradient-picker.component.css']
})
export class GradientPickerComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() colorToPosition!: (color: string) => CeGradientColorPosition;
  @Input() color?: string;
  @Input() lock?: 'x' | 'y';

  @Output() colorChanges = new EventEmitter<string>();

  @ContentChild(CeGradientComponent) gradientComponent?: CeGradientComponent;
  @ContentChild(CeGradientComponent, { read: ElementRef }) gradientElementRef?: ElementRef;

  colorPosition?: CeGradientColorPosition;

  private destroy$ = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private colorPickerStateService: CeColorPickerStateService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.listenClickEvent();
    this.listenGradientChanges();
    this.setColorPositionFromColor(this.color);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.setColorPositionFromColor(this.color);
    }
  }

  private listenClickEvent() {
    fromEvent<MouseEvent>(this.gradientElementRef?.nativeElement, 'mousedown')
      .pipe(takeUntil(this.destroy$),)
      .subscribe(_ => this.listenPickingEvent());
  }

  private listenGradientChanges() {
    this.gradientComponent?.gradientChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe(_ => this.updateSelectedColor());
  }

  /**
   * Listen picking event (start, progress, end) and update color
   */
  private listenPickingEvent() {
    merge(
      this.onStartPicking(),
      this.onPicking(),
    )
      .subscribe((mouseEvent: MouseEvent) => {
        this.updateColorFromMouseEvent(mouseEvent);
      });

    this.onEndPicking().subscribe();
  }

  /**
   * Gets the observable definfing when picking is started
   * @returns event when picking is started
   */
  private onStartPicking(): Observable<MouseEvent> {
    return fromEvent<MouseEvent>(document, 'mousedown')
      .pipe(
        take(1),
        tap(_ => this.setState('picking')),
      );
  }

  /**
   * Gets the observable definfing when picking is in progress
   * @returns event when picking is in progress
   */
  private onPicking(): Observable<MouseEvent> {
    return fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(fromEvent(document, 'mouseup')),
        takeUntil(this.destroy$),
      );
  }

  /**
   * Gets the observable definfing when picking is done
   * @returns event when picking is done
   */
  private onEndPicking(): Observable<MouseEvent> {
    return fromEvent<MouseEvent>(document, 'mouseup')
      .pipe(
        take(1),
        tap(_ => this.setState('idle'))
      );
  }

  /**
   * Update color from mouse coordinates by
   * @param event Mouse event with coordinates
   */
  private updateColorFromMouseEvent(event: MouseEvent) {
    const rect = this.context.canvas.getBoundingClientRect();
    const pos_x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width - 1);
    const pos_y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height - 1);

    this.setColorPosition({ x: pos_x * 100 / this.context.canvas.width, y: pos_y * 100 / this.context.canvas.height });
    this.updateSelectedColor();
  }

  /**
   * Compute color position via the given colorToPosition function
   * It updates colorPosition property in percentage of the gradient layer
   * @param color Color from which position is determined
   */
  private setColorPositionFromColor(color?: string) {
    if (color) {
      const colorPosition = this.colorToPosition(color);
      this.setColorPosition(colorPosition);
      this.cdr.detectChanges();
    }
  }

  /**
   * Set color position regarding lock property
   * @param position the new position to be applied
   */
  private setColorPosition(position: CeGradientColorPosition) {
    const pos_x_percent = this.lock === 'x' ? this.colorPosition?.x ?? position.x : position.x;
    const pos_y_percent = this.lock === 'y' ? this.colorPosition?.y ?? position.y : position.y;

    this.colorPosition = { x: pos_x_percent, y: pos_y_percent };
  }

  /**
   * Notify of a new selected color or preview changes according to current state
   */
  private updateSelectedColor() {

    if (!this.colorPosition) {
      return;
    }

    const selectedColor = this.readColorFromPosition(this.colorPosition);
    this.colorChanges.next(selectedColor);
  }

  /**
   * Read color from given position in hex format
   * @param position x and y coordinates
   * @returns color in hex format
   */
  private readColorFromPosition(position: CeGradientColorPosition): string {
    const [r, g, b] = this.context.getImageData(
      position.x * this.context.canvas.width / 100,
      position.y * this.context.canvas.height / 100,
      1,
      1)['data'];   // Read pixel Color
    const color = CeColorUtils.rgbToHex(r, g, b);
    return color
  }

  /**
   * Get the CanvasRenderingContext2D from gradient component
   * @returns context 
   */
  private get context(): CanvasRenderingContext2D {
    if (!this.gradientComponent) {
      throw new Error("ce-gradient component child missing while using ce-gradient-picker");
    }

    return this.gradientComponent.context;
  }

  /**
   * Set picking state
   * @param state current picking state according to mouse event
   */
  private setState(state: CeColorPickerState) {
    this.colorPickerStateService.setState(state);
  }
}

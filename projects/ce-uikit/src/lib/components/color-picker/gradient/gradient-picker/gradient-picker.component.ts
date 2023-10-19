import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { CeColorPickerUtils } from '../../color-picker.utils';
import { CeGradientColorPosition } from '../gradient';
import { CeGradientComponent } from '../gradient.component';

@Component({
  selector: 'ce-gradient-picker',
  templateUrl: './gradient-picker.component.html',
  styleUrls: ['./gradient-picker.component.css']
})
export class GradientPickerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() colorToPosition!: (color: string) => CeGradientColorPosition;
  @Input() color?: string;
  @Input() lock?: 'x' | 'y';

  @Output() colorChanges = new EventEmitter<string>();

  @ContentChild(CeGradientComponent) gradientComponent?: CeGradientComponent;
  @ContentChild(CeGradientComponent, { read: ElementRef }) gradientElementRef?: ElementRef;

  colorPosition?: CeGradientColorPosition;

  private destroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.listenClickEvent();

    if (this.color) {
      const colorPosition = this.colorToPosition(this.color);
      this.setColorPosition(colorPosition);
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listenClickEvent() {
    fromEvent<MouseEvent>(this.gradientElementRef?.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.onClick(event));

    fromEvent<MouseEvent>(this.gradientElementRef?.nativeElement, 'mousedown')
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.onMouseDown(event));
  }

  onClick(mouseEvent: MouseEvent) {
    this.setColorPositionFromMouseEvent(mouseEvent);
  }

  onMouseDown(event: MouseEvent) {
    const target = event.target;

    if (!target) {
      return;
    }

    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(fromEvent(document, 'mouseup')),
        takeUntil(this.destroy$)
      )
      .subscribe((mouseEvent: MouseEvent) => {
        this.setColorPositionFromMouseEvent(mouseEvent);
      });
  }

  private setColorPositionFromMouseEvent(event: MouseEvent) {
    const rect = this.context.canvas.getBoundingClientRect();

    const pos_x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width - 1);
    const pos_y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height - 1);

    this.setColorPosition({ x: pos_x * 100 / this.context.canvas.width, y: pos_y * 100 / this.context.canvas.height });
    this.updateSelectedColor();
  }

  private setColorPosition(position: CeGradientColorPosition) {
    const pos_x_percent = this.lock === 'x' ? this.colorPosition?.x ?? position.x : position.x;
    const pos_y_percent = this.lock === 'y' ? this.colorPosition?.y ?? position.y: position.y;

    this.colorPosition = { x: pos_x_percent, y: pos_y_percent };
  }

  private updateSelectedColor() {

    if (!this.colorPosition) {
      return;
    }

    const [r, g, b] = this.context.getImageData(
      this.colorPosition.x * this.context.canvas.width / 100,
      this.colorPosition.y * this.context.canvas.height / 100,
      1,
      1)['data'];   // Read pixel Color
    const color = CeColorPickerUtils.rgbToHex(r, g, b);
    this.colorChanges.next(color);
  }

  private get context() {
    if (!this.gradientComponent) {
      throw new Error("ce-gradient component child missing while using ce-gradient-picker");
    }

    return this.gradientComponent.context;
  }
}

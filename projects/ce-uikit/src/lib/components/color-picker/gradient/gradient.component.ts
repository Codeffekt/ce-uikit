import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { CeColorPickerUtils } from '../color-picker.utils';
import { CanvasGradientBuilder } from './canvas-gradient.builder';
import { CeGradient, CeGradientColorPosition } from './gradient';

@Component({
  selector: 'ce-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class CeGradientComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() gradients: CeGradient[] = [];
  @Output() color = new EventEmitter<string>();
  @Output() colorPosition = new EventEmitter<CeGradientColorPosition>();
  @ViewChild('canvas') canvas!: ElementRef;

  private _colorPosition?: CeGradientColorPosition;
  private destroy$ = new Subject<void>();
  private context?: CanvasRenderingContext2D;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.configureCanvas();
    this.updateGradient();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['gradients'].isFirstChange()) {
      this.updateGradient();
      this.updateSelectedColor();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

    if (!this.context) {
      throw new Error('Cannot setup gradient : Error while getting context 2D');
    }

    const rect = this.context.canvas.getBoundingClientRect();
    const pos_x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width - 1);
    const pos_y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height - 1);

    this.setColorPosition({ x: pos_x, y: pos_y });
  }

  private updateGradient() {
    // Clear gradients
    if (!this.context) {
      throw new Error('Cannot setup gradient : Error while getting context 2D');
    }
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    // Create gradients and fill
    for (const gradient of this.gradients) {
      this.context.fillStyle = new CanvasGradientBuilder(this.context).withGradient(gradient).build();;
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }

  private configureCanvas() {
    this.context = this.canvas.nativeElement.getContext('2d', { willReadFrequently: true });
    this.canvas.nativeElement.height = this.elementRef.nativeElement.clientHeight;
    this.canvas.nativeElement.width = this.elementRef.nativeElement.clientWidth;
  }

  private setColorPosition(position: CeGradientColorPosition) {
    this._colorPosition = position;

    if (this.context) {
      const pos_x_percent = position.x * 100 / this.context.canvas.width;
      const pos_y_percent = position.y * 100 / this.context.canvas.height;
      this.colorPosition.next({ x: pos_x_percent, y: pos_y_percent });
    }

    this.updateSelectedColor();
  }

  private updateSelectedColor() {
    if (!this.context) {
      throw new Error('Cannot setup gradient : Error while getting context 2D');
    }

    if (!this._colorPosition) {
      return;
    }

    const pixel = this.context.getImageData(this._colorPosition.x, this._colorPosition.y, 1, 1)['data'];   // Read pixel Color
    const color = CeColorPickerUtils.rgbToHex(pixel[0], pixel[1], pixel[2]);
    this.color.next(color);
  }
}

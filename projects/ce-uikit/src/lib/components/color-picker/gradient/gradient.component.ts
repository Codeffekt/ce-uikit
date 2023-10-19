import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CanvasGradientBuilder } from './canvas-gradient.builder';
import { CeGradient } from './gradient';

@Component({
  selector: 'ce-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class CeGradientComponent implements OnChanges, AfterViewInit {

  @Input() gradients: CeGradient[] = [];
  @Output() gradientsChanges = new EventEmitter<CeGradient[]>();

  @ViewChild('canvas') canvas!: ElementRef;

  private _context?: CanvasRenderingContext2D;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.configureCanvas();
    this.updateGradient();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['gradients'].isFirstChange()) {
      this.updateGradient();
    }
  }

  get context(): CanvasRenderingContext2D {
    if (!this._context) {
      throw new Error('Cannot setup gradient : Error while getting context 2D');
    }
    return this._context;
  }

  private updateGradient() {
    // Clear gradients
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    // Create gradients and fill
    for (const gradient of this.gradients) {
      this.context.fillStyle = new CanvasGradientBuilder(this.context).withGradient(gradient).build();;
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
    this.gradientsChanges.next(this.gradients);
  }

  private configureCanvas() {
    this._context = this.canvas.nativeElement.getContext('2d', { willReadFrequently: true });
    this.canvas.nativeElement.height = this.elementRef.nativeElement.clientHeight;
    this.canvas.nativeElement.width = this.elementRef.nativeElement.clientWidth;
  }
}

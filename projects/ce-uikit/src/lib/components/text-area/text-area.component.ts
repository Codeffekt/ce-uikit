import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlComponent } from '../form-control/form-control';

export type CeTextAreaResize = 'none' | 'vertical' | 'horizontal';

@Component({
  selector: 'ce-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeTextAreaComponent
    }
  ]
})
export class CeTextAreaComponent extends FormControlComponent<string> implements AfterViewInit {

  @Input() resize?: CeTextAreaResize;
  @Input() height?: string;
  @Input() maxHeight?: string;
  @ViewChild('textarea') textArea!: ElementRef;
  @Input() rows?: number;
  @Input() cols?: number;

  ngAfterViewInit(): void {
    this.initStyles();
  }

  private initStyles() {
    if (this.resize) {
      this.textArea.nativeElement.style.resize = this.resize;
    }

    if (this.maxHeight) {
      this.textArea.nativeElement.style.maxHeight = this.maxHeight;
    }

    if (this.height) {
      this.textArea.nativeElement.style.height = this.height;
      this.textArea.nativeElement.style.minHeight = this.height;
    }
  }
}

import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

@Directive({
  selector: '[width],[minWidth],[maxWidth]'
})
export class CeWidthDirective extends CeRenderer{
  
  @Input() set width(value: string) {
    this.setStyle('width', value);
  }

  @Input() set minWidth(value: string) {
    this.setStyle('min-width', value);
  }

  @Input() set maxWidth(value: string) {
    this.setStyle('max-width', value);
  }
}

import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

@Directive({
  selector: '[height],[minHeight],[maxHeight]'
})
export class CeHeightDirective extends CeRenderer {

  @Input() set height(value: string) {
    this.setStyle('height', value);
  }

  @Input() set minHeight(value: string) {
    this.setStyle('min-height', value);
  }

  @Input() set maxHeight(value: string) {
    this.setStyle('max-height', value);
  }

}
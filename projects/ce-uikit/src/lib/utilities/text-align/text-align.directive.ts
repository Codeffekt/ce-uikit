import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

export type CeTextAlignment = 'align' | 'start' | 'end' | 'center' | 'justify';

@Directive({
  selector: '[textAlign]'
})
export class CeTextAlignDirective extends CeRenderer {

  @Input() set textAlign(align: CeTextAlignment) {
    this.setStyle('text-align', align);
  }
}

import { Directive } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

@Directive({
  selector: '[noShrink]',
})
export class CeNoShrinkDirective extends CeRenderer {

  protected override onInit(): void {
    this.addClass(`shrink-0`)
  }
}

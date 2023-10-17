import { Directive } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

@Directive({
  selector: '[dark]'
})
export class CeDarkModeDirective extends CeRenderer {

  protected override onInit(): void {
    this.addClass('dark');
  }
}

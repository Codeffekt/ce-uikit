import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';
import { CeShadowBuilder } from './shadow.builder';

@Directive({
  selector: '[shadow]'
})
export class CeShadowDirective extends CeRenderer{

  @Input() set shadow(elevation: number){
    const shadow = CeShadowBuilder.fromElevation(elevation);
    this.setStyle('box-shadow', shadow);
  }
}

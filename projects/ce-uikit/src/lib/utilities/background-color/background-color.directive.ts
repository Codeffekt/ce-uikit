import { Directive, HostListener, Input } from '@angular/core';
import { CeRenderer } from '../../core';

@Directive({
  selector: '[bgColor], [hover.bgColor]'
})
export class CeBackgroundColorDirective extends CeRenderer {

  @Input({ alias: 'bgColor' }) set backgroundColor(value: string) {
    this._backgroundColor = value;
    this.setBackgroundColor(this._backgroundColor);
  }

  @Input({ alias: 'hover.bgColor' }) hoverBackgroundColor?: string;

  @HostListener('mouseenter') onMouseEnter() {
    if(this.hoverBackgroundColor){
      this.setBackgroundColor(this.hoverBackgroundColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this._backgroundColor);
  }

  private _backgroundColor?: string;

  private setBackgroundColor(color?: string){
    this.setClassValue('background-color', `bg-${color}`)
  }
}

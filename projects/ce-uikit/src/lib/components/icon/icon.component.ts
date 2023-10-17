import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CeTextBaseComponent } from '../text/text-base.component';
import { CeIconRegistryService } from './icon-registry.service';
import { CeSizeIconUtils } from './icon-size.utils';

const DEFAULT_FONT_SET = 'ce';

@Component({
  selector: 'ce-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class CeIconComponent extends CeTextBaseComponent {

  private _fontSet?: string;

  @Input() set fontIcon(value: string) {
    this.setClassValue('font-icon', value);
  }

  @Input() set fontSet(value: string) {
    this._fontSet = value;
    this.setClassValue('font-set',this._fontSet);
  }

  @Input() set size(value: string) {
    this.setStyle('font-size', CeSizeIconUtils.size(value));
  }

  @Input() set svg(value: string) {
    
  }

  constructor(
    private registry: CeIconRegistryService,
    elt: ElementRef,
    renderer: Renderer2) {
    super(elt, renderer);
  }

  protected override onInit(): void {

    // Adding font set class if set globally
    const fontSet = this.registry.getFontSet() ?? DEFAULT_FONT_SET;
    if (!this._fontSet && fontSet) {
      this.fontSet = fontSet;
    }

    // Align icon vertically
    this.setStyle('display', 'flex');
    this.setStyle('align-items', 'center');
  }
}

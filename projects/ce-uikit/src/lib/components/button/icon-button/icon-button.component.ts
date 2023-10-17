import { Component, HostListener, Input } from '@angular/core';
import { CeRenderer } from '../../../core';
import { CeButtonComponent } from '../button.component';

const DEFAULT_ICON_BUTTON_COLOR = 'text';

@Component({
  selector: 'ce-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class CeIconButtonComponent extends CeButtonComponent {

  protected override onInit(): void {

    super.onInit();

    if (!this.color) {
      this.color = DEFAULT_ICON_BUTTON_COLOR;
    }
  }
}

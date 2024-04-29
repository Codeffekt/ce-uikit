import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CeRenderer } from '../../../core';

@Component({
  selector: 'ce-tab-item-label',
  templateUrl: './tab-item-label.component.html',
  styleUrls: ['./tab-item-label.component.css']
})
export class TabItemLabelComponent extends CeRenderer implements OnInit {

  @Input() active: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    console.log()
    this.setBrightness(0.8);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBrightness(1);
  }

  private setBrightness(value: number) {
    this.setStyle('opacity', `${value}`);
  }

  protected override onInit(): void {
    this.setStyle('cursor', 'pointer');
  }
}

import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ce-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class CeTabItemComponent {
  @Input() label!: string;
  @Input() active: boolean = false
  @HostBinding('class.active') get isActiveClass() {
    return this.active;
  }
}

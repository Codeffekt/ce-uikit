import { Component, Input } from '@angular/core';

@Component({
  selector: 'ce-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class CeTooltipComponent {

  @Input() text?: string;
}

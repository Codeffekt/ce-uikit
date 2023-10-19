import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CeGradient } from '../gradient/gradient';

@Component({
  selector: 'ce-color-tint',
  templateUrl: './color-tint.component.html',
  styleUrls: ['./color-tint.component.css']
})
export class ColorTintComponent implements OnInit {

  @Output() tint = new EventEmitter<string>();

  gradient: CeGradient = {
    type: 'vertical',
    stopColors: ['red', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', 'red']
  }

  constructor() { }

  ngOnInit(): void {
  }

  onTintSelected(color: string) {
    this.tint.next(color);
  }
}

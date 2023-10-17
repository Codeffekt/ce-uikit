import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ce-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class CeDialogComponent {

  @Output() close = new EventEmitter<void>();
  @Input() canClose?: boolean = true;

  onClose() {
    this.close.next();
  }
}

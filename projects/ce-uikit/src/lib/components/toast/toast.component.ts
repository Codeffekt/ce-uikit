import { Component, Inject } from '@angular/core';
import { CE_TOAST_DATA } from './toast';
import { CeToastData } from './toast.model';

@Component({
  selector: 'ce-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class CeToastComponent {

  constructor(@Inject(CE_TOAST_DATA) public data: CeToastData) { }

}

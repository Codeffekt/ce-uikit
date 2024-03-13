import { Component, Input, OnInit, inject } from '@angular/core';
import { CeRadioButtonService } from '../radio-button.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'ce-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class CeRadioButtonComponent<T> {

  @Input() value!: T;

  active$ = inject(CeRadioButtonService).selectedOptionChanges().pipe(map(value => this.value === value));

  constructor(private radioButtonService: CeRadioButtonService<T>) { }

  select() {
    this.radioButtonService.setValue(this.value);
  }
}

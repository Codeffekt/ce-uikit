import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CeRadioButtonService } from '../radio-button.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlComponent } from '../../form-control';
import { Subject, distinct, takeUntil } from 'rxjs';

export type CeRadioGroupLayoutDirection = 'horizontal' | 'vertical';

@Component({
  selector: 'ce-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  providers: [
    CeRadioButtonService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeRadioGroupComponent
    }
  ]
})
export class CeRadioGroupComponent<T> extends FormControlComponent<T> implements OnInit, OnDestroy {

  @Input() direction: CeRadioGroupLayoutDirection = 'horizontal';

  private readonly destroy$ = new Subject<void>();

  constructor(private radioButtonService: CeRadioButtonService<T>) {
    super();
  }

  ngOnInit(): void {
    this.listenValueChanges();
    this.listenOptionSelectionChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private listenValueChanges() {
    this.valueChanges()
      .pipe(
        takeUntil(this.destroy$),
        distinct(),
      )
      .subscribe((value) => this.radioButtonService.setValue(value))
  }

  private listenOptionSelectionChanges() {
    this.radioButtonService.selectedOptionChanges()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((value) => this.value = value)
  }
}

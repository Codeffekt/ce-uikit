import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { CeSelectOption, CeSelectionOptionService } from '../select-option.service';

@Component({
  selector: 'ce-select-option',
  templateUrl: './select-option.component.html'
})
export class CeSelectOptionComponent<T> implements OnInit {

  @Input() value!: T;
  @Input() label!: string;
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.optionsService.selectOption({ value: this.value, label: this.label });
  }

  active: boolean = false;

  constructor(
    private optionsService: CeSelectionOptionService<T>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.register();
    this.optionsService.onValueChanges().subscribe(value => {
      this.active = value === this.value;
      this.cdr.detectChanges()
    })

  }

  private register() {
    const option: CeSelectOption<T> = {
      value: this.value,
      label: this.label
    }
    this.optionsService.register(option);
  }
}

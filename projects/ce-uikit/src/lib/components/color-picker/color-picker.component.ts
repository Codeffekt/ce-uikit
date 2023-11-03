import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CeColorPickerState, CeColorPickerStateService } from './color-picker-state.service';

export type CeColorPickerUpdateMode = 'validation' | 'continous';

@Component({
  selector: 'ce-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CeColorPickerStateService
  ]
})
export class CeColorPickerComponent implements OnInit, OnDestroy {

  @Input() color!: string;
  @Input() updateMode: CeColorPickerUpdateMode = 'continous';
  @Output() colorPicked = new EventEmitter<string>();
  @Output() colorValidated = new EventEmitter<string>();

  tint?: string;
  selectedColor!: string;
  form!: FormGroup;

  private destroy$ = new Subject<void>();
  private formSub?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private colorPickerStateService: CeColorPickerStateService
  ) { }

  ngOnInit(): void {
    this.selectedColor = this.color;
    this.initForm();
    this.listenForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onTintChanges(color: string) {
    this.tint = color;
  }

  onColorChanges(color: string) {
    this.selectedColor = color;
    this.unlistenForm();
    this.form.patchValue({ 'color': color }, { onlySelf: true, emitEvent: false });
    this.listenForm();

    if (this.updateMode === 'continous') {
      this.notifyColorPicked(this.selectedColor);
    }
  }

  onColorPaletteSelected(color: string) {
    this.color = color;
  }

  onValidate() {
    this.notifyColorPicked(this.selectedColor);
    this.colorValidated.next(this.selectedColor);
  }

  stateChanges(): Observable<CeColorPickerState> {
    return this.colorPickerStateService.stateChanges();
  }

  private notifyColorPicked(color: string) {
    this.colorPicked.next(color);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      'color': this.color
    });
  }

  private listenForm() {
    this.formSub = this.form.get('color')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((color) => this.color = color);
  }

  private unlistenForm() {
    this.formSub?.unsubscribe();
  }
} 
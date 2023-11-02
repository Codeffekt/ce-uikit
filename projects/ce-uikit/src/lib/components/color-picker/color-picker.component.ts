import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';

export type CeColorPickerUpdateMode = 'validation' | 'continous';

@Component({
  selector: 'ce-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeColorPickerComponent implements OnInit, OnDestroy {

  @Input() color!: string;
  @Input() updateMode :CeColorPickerUpdateMode = 'continous';
  @Output() colorPicked = new EventEmitter<string>();
  @Output() colorValidated = new EventEmitter<string>();

  tint?: string;
  selectedColor!: string;
  form!: FormGroup;

  private destroy$ = new Subject<void>();
  private formSub?: Subscription;

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.selectedColor = this.color;
    this.initForm();
    this.listenForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onTintSelected(color: string) {
    this.tint = color;
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
    this.unlistenForm();
    this.form.patchValue({ 'color': color }, { onlySelf: true, emitEvent: false });
    this.listenForm();

    if(this.updateMode === 'continous'){
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
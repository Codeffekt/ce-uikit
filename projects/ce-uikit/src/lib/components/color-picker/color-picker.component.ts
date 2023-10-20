import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ce-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeColorPickerComponent implements OnInit, OnDestroy {

  @Input() color!: string;
  @Output() validate = new EventEmitter<string>();

  tint?: string;
  selectedColor!: string;
  form!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.selectedColor = this.color;
    this.initForm();
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
    this.form.patchValue({ 'color': color }, { emitEvent: false });
  }

  onColorPaletteSelected(color: string) {
    this.color = color;
  }

  onValidate() {
    this.validate.next(this.selectedColor);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      'color': this.color
    });

    this.form.get('color')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(color => {
        // this.color = color;
        // this.cdr.detectChanges();
      });
  }
} 
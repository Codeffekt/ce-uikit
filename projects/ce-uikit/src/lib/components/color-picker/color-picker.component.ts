import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CeColorPickerState, CeColorPickerStateService } from './color-picker-state.service';
import { CeColorPicked } from './color-picked.model';

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
  @Output() colorPicked = new EventEmitter<string>();
  @Output() colorValidated = new EventEmitter<string>();
  @Output() previewColor = new EventEmitter<string>();

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

  onColorChanges(colorPicked: CeColorPicked) {
    this.selectedColor = colorPicked.color;
    this.unlistenForm();
    this.form.patchValue({ 'color': colorPicked.color }, { onlySelf: true, emitEvent: false });
    this.listenForm();
    
    if(colorPicked.pickerState === 'picking') {
      this.notifyPreviewColor(this.selectedColor);
    } else {
      this.notifyColorPicked(this.selectedColor);
    }
  }

  onColorPaletteSelected(color: string) {
    this.color = color;
  }

  stateChanges(): Observable<CeColorPickerState> {
    return this.colorPickerStateService.stateChanges();
  }

  private notifyColorPicked(color: string) {
    this.colorPicked.next(color);
  }

  private notifyPreviewColor(previewColor: string) {
    this.previewColor.next(previewColor);
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
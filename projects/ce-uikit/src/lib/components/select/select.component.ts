import { ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FormControlComponent } from '../form-control';
import { CeSelectOption, CeSelectionOptionService } from './select-option.service';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
  selector: 'ce-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    CeSelectionOptionService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeSelectComponent
    }
  ]
})
export class CeSelectComponent<T> extends FormControlComponent<T> implements OnInit {

  @ViewChild('trigger', { read: ElementRef }) trigger!: ElementRef;
  triggerBbox?: DOMRect;
  isOpen = false;
  activeOption?: CeSelectOption<T>;
  positions = [
    new ConnectionPositionPair(
      {
        originX: 'end',
        originY: 'bottom',
      },
      {
        overlayX: 'end',
        overlayY: 'top',
      },
      0,
      0
    ),
  ];
  private readonly destroy = new Subject<void>();

  constructor(
    private viewportRuler: ViewportRuler,
    private changeDetectorRef: ChangeDetectorRef,
    private optionsService: CeSelectionOptionService<T>
  ) {
    super();
  }

  ngOnInit() {
    this.listenViewportChanges();
    this.listenOptionSelectionChanges();
    this.listenValueChanges();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  toggle() {
    this.triggerBbox = this.trigger.nativeElement.getBoundingClientRect();
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  private listenViewportChanges() {
    this.viewportRuler
      .change()
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        if (this.isOpen) {
          this.triggerBbox = this.trigger.nativeElement.getBoundingClientRect();
          this.changeDetectorRef.markForCheck();
        }
      });
  }

  private listenValueChanges() {
    this.valueChanges()
      .pipe(
        takeUntil(this.destroy),
      )
      .subscribe((value) => this.optionsService.setValue(value))
  }

  private listenOptionSelectionChanges() {
    this.optionsService.selectedOptionChanges()
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((option) => {
        this.value = option?.value;
        this.close();
      })
  }
}

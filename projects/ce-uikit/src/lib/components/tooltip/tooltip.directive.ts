import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, of, switchMap, takeUntil, timer } from 'rxjs';
import { CeTooltipComponent } from './tooltip.component';

const TOOLTIP_ATTACH_DELAY_MS = 500;

@Directive({
  selector: '[ceTooltip]'
})
export class CeTooltipDirective implements OnInit, OnDestroy {

  @Input({ alias: 'ceTooltip' }) toolTip?: string;

  private overlayRef?: OverlayRef;
  private show$ = new Subject<boolean>();
  private destroy$ = new Subject<void>();

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.initOverlay();
    this.listenShow();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('mouseenter')
  showTooltip() {
    if (!this.toolTip) {
      return;
    }
    this.triggerShow();
  }

  @HostListener('mouseleave')
  hideTooltip() {
    this.show$.next(false);
  }


  private initOverlay() {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
        },
        {
          originX: 'end',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
        },
      ]);

    const overlayConfig = new OverlayConfig({
      positionStrategy,
      hasBackdrop: false
    });

    this.overlayRef = this.overlay.create(overlayConfig);
  }

  private triggerShow() {
    this.show$.next(true);
  }

  private listenShow() {
    this.show$.pipe(
      takeUntil(this.destroy$),
      switchMap(shouldShow => {
        if (shouldShow) {
          return timer(TOOLTIP_ATTACH_DELAY_MS).pipe(map(_ => true))
        } else {
          return of(false)
        }
      })
    )
      .subscribe(shouldShow => {
        if (shouldShow) {
          this.attach()
        } else {
          this.detach();
        }
      })
  }

  private attach() {
    if (!this.overlayRef) {
      throw new Error('No overlay ref created before attaching it');
    }

    const tooltipPortal = new ComponentPortal(CeTooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.text = this.toolTip; // Pass tooltip text to component)
  }

  private detach() {
    this.overlayRef?.detach();
  }
}

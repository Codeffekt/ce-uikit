import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { CeColorPickerState } from "./color-picker-state.service";
import { CeColorPickerComponent } from "./color-picker.component";

const DEFAULT_COLOR = "#FFFFFF";

@Directive({
    selector: '[ceColorPicker]'
})
export class CeColorPickerDirective implements OnInit, OnDestroy {

    @Input({ alias: 'ceColor' }) color?: string;
    @Output() colorPicked = new EventEmitter<string>();
    @Output() colorStateChanges = new EventEmitter<CeColorPickerState>;
    @Output() previewColor = new EventEmitter<string>();

    @HostListener('click')
    show() {
        this.attach();
    }

    private overlayRef?: OverlayRef;
    private destroy$ = new Subject<void>();

    constructor(
        private overlay: Overlay,
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.initOverlay();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });
        this.overlayRef = this.overlay.create(overlayConfig);
        this.overlayRef.backdropClick().subscribe(() => this.detach());
    }

    private attach() {
        if (!this.overlayRef) {
            throw new Error('No overlay ref created before attaching it');
        }

        const colorPickerPortal = new ComponentPortal(CeColorPickerComponent);
        const colorPickerRef = this.overlayRef.attach(colorPickerPortal);

        colorPickerRef.instance.color = this.color ?? DEFAULT_COLOR;

        colorPickerRef.instance.stateChanges()
            .pipe(takeUntil(this.destroy$))
            .subscribe(state => this.colorStateChanges.next(state));

        colorPickerRef.instance.previewColor
            .pipe(takeUntil(this.destroy$))
            .subscribe(previewColor => this.previewColor.next(previewColor));

        colorPickerRef.instance.colorPicked
            .pipe(takeUntil(this.destroy$))
            .subscribe(color => this.colorPicked.next(color));

        colorPickerRef.instance.colorValidated
            .pipe(takeUntil(this.destroy$))
            .subscribe(_ => this.detach());
    }

    private detach() {
        this.overlayRef?.detach();
    }
}
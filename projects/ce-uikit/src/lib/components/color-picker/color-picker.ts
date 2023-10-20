import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { CeColorPickerComponent } from "./color-picker.component";

@Directive({
    selector: '[ceColorPicker]'
})
export class CeColorPickerDirective implements OnInit, OnDestroy {

    @Input({ alias: 'ceColor' }) color: string = "#FFFFFF";
    @Output() colorPicked = new EventEmitter<string>(); 

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
        // this.show();
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

        colorPickerRef.instance.color = this.color;
        colorPickerRef.instance.validate.subscribe(color => {
            this.colorPicked.next(color);
            this.detach();
        })
    }

    private detach() {
        this.overlayRef?.detach();
    }
}
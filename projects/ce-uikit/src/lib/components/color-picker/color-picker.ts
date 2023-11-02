import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { CeColorPickerComponent, CeColorPickerUpdateMode } from "./color-picker.component";

const DEFAULT_COLOR = "#FFFFFF";
const DEFAULT_UPDATE_MODE: CeColorPickerUpdateMode = 'continous';

@Directive({
    selector: '[ceColorPicker]'
})
export class CeColorPickerDirective implements OnInit, OnDestroy {

    @Input({ alias: 'ceColor' }) color?: string;
    @Input({alias:'ceColorUpdateMode'}) updateMode?: CeColorPickerUpdateMode;
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
        colorPickerRef.instance.updateMode = this.updateMode ?? DEFAULT_UPDATE_MODE;
        colorPickerRef.instance.colorPicked.subscribe(color => {
            this.colorPicked.next(color);
        });
        colorPickerRef.instance.colorValidated.subscribe(_ =>
            this.detach()
        );
    }

    private detach() {
        this.overlayRef?.detach();
    }
}
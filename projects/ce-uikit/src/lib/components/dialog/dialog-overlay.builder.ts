import { Overlay } from "@angular/cdk/overlay";
import { CeDialogConfig } from "./dialog";

export class CeDialogOverlayBuidler {

    private overlay!: Overlay;
    private config?: CeDialogConfig;

    withOverlay(overlay: Overlay) {
        this.overlay = overlay;
        return this;

    }

    withConfig(config?: CeDialogConfig) {
        this.config = config;
        return this;
    }

    build() {
        // Globally centered position strategy
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();

        const overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'overlay-backdrop',
            panelClass: ['overlay-panel'],
        });

        // this.styleOverlay(overlayRef);
        // overlayRef.overlayElement.style.backgroundColor = 'blue';

        // overlayRef.overlayElement.style.width = '500px';
        
        // overlayRef.overlayElement.style.backgroundColor = 'red';
        // overlayRef.overlayElement.style.fontSize = '48px';
        return overlayRef;
    }
}
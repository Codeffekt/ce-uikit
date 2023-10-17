import { ConnectedPosition, Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { CeOverlayOrigin } from "./overlay";

export class CeOverlayConfigBuilder {

    private _origin!: CeOverlayOrigin;
    private _positions: ConnectedPosition[] = [];
    private _overlay!: Overlay;
    private _hasBackdrop = false;

    origin(origin: CeOverlayOrigin) {
        this._origin = origin;
        return this;
    }

    overlay(overlay: Overlay) {
        this._overlay = overlay;
        return this;
    }

    backdrop(hasBackdrop: boolean) {
        this._hasBackdrop = hasBackdrop;
        return this;
    }

    centerX() {
        this._positions = [{ originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'top' }];
        return this;
    }

    build() {
        const positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this._origin)
            .withPositions(this._positions);

        // TODO: Change backdrop class
        return new OverlayConfig({
            positionStrategy,
            hasBackdrop: this._hasBackdrop,
            backdropClass: 'cdk-overlay-transparent-backdrop',
        });
    }
}
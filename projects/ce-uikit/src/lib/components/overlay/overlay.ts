import { FlexibleConnectedPositionStrategyOrigin, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { CeOverlayConfigBuilder } from "./overlay-config.builder";

export type CeOverlayPositionStrategy = 'global' | 'connected' | 'flexibleConnected';

export type CeOverlayOrigin = FlexibleConnectedPositionStrategyOrigin;

export type CeOverlayRef = OverlayRef;

@Injectable()
export class CeOverlay {

    constructor(private overlay: Overlay) { }

    attach<T>(opts: { component: ComponentType<T>, origin: CeOverlayOrigin }): CeOverlayRef {
        const config =
            new CeOverlayConfigBuilder()
                .origin(opts.origin)
                .overlay(this.overlay)
                .centerX()
                .build();
        const overlayRef = this.overlay.create(config);
        const portal = new ComponentPortal(opts.component);
        overlayRef.attach(portal);
        return overlayRef;
    }

    detach() {
        // TODO: 
    }
}
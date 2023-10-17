import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { Injectable, InjectionToken, Injector } from "@angular/core";
import { CeToastComponent } from "./toast.component";
import { CeToastData } from './toast.model';
import { take, timer } from "rxjs";

export const CE_TOAST_DATA = new InjectionToken<string>('TOAST_DATA');

const DEFAULT_TOAST_CONFIG: CeToastConfig = {
    duration: 3000
}

export interface CeToastConfig {
    duration: number;
}

@Injectable({providedIn:'root'})
export class CeToast {

    constructor(
        private injector: Injector,
        private overlay: Overlay) { }

    success(message: string) {
        this.openOverlay(CeToastComponent, { message, type: 'success' });
    }

    error(message: string) {
        this.openOverlay(CeToastComponent, { message, type: 'error' });
    }

    open(message: string) {
        this.openOverlay(CeToastComponent, { message, type: 'info' });
    }

    private scheduleOverlayClose(overlayRef: OverlayRef, delay: number) {
        timer(delay).pipe(
            take(1)
        ).subscribe(() => {
            overlayRef.detach();
        });
    }

    private openOverlay<T>(component: ComponentType<T>, data: CeToastData, config: CeToastConfig = DEFAULT_TOAST_CONFIG): OverlayRef {
        const overlayRef = this.overlay.create(this.getOverlayConfig());
        const injector = this.createInjector(data);
        const portal = new ComponentPortal(component, null, injector);
        overlayRef.attach(portal);

        this.scheduleOverlayClose(overlayRef, config.duration);

        return overlayRef;
    }

    private getOverlayConfig(): OverlayConfig {
        return new OverlayConfig({
            positionStrategy: this.overlay.position().global()
                .bottom('20px')
                .centerHorizontally(),
        });
    }

    private createInjector(data: CeToastData): Injector {
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: CE_TOAST_DATA, useValue: data }
            ]
        })
    }
}
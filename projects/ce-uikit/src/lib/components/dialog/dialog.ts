import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { take } from 'rxjs';
import { CeDialogRef } from './dialog-ref';
import { CeSizeBorderUtils } from '../../core';
import { CeShadowBuilder } from '../../utilities';

export interface CeDialogConfig {
  data?: any;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string
  maxWidth?: string;
  maxHeight?: string;
  closeOnBackdropClick?: boolean
}

export const CE_DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

@Injectable({
  providedIn: 'root'
})
export class CeDialog {

  constructor(
    private injector: Injector,
    private overlay: Overlay) { }

  open<T>(component: ComponentType<T>, config?: CeDialogConfig) {

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel'
    });

    // Create dialogRef to return
    const dialogRef = new CeDialogRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: CeDialogRef, useValue: dialogRef },
        { provide: CE_DIALOG_DATA, useValue: config?.data }
      ]
    });

    // Close overlay on backdrop click
    if (config?.closeOnBackdropClick) {
      overlayRef.backdropClick().pipe(take(1)).subscribe(_ => dialogRef.close());
    }

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    // Apply style only after overlay has been attached
    this.styleOverlay(overlayRef, config);

    return dialogRef;
  }


  private styleOverlay(overlayRef: OverlayRef, config?: CeDialogConfig) {
    if (config?.width) {
      overlayRef.overlayElement.style.width = config.width;
    }

    if (config?.height) { 
      overlayRef.overlayElement.style.height = config.height;
    }

    if (config?.minWidth) {
      overlayRef.overlayElement.style.minWidth = config.minWidth;
    }

    if (config?.minHeight) {
      overlayRef.overlayElement.style.minHeight = config.minHeight;
    }

    if (config?.maxWidth) {
      overlayRef.overlayElement.style.maxWidth = config.maxWidth;
    }

    if (config?.maxHeight) {
      overlayRef.overlayElement.style.maxHeight = config.maxHeight;
    }

    overlayRef.overlayElement.style.backgroundColor = 'var(--neutral)';
    overlayRef.overlayElement.style.borderRadius = CeSizeBorderUtils.size(3);
    overlayRef.overlayElement.style.boxShadow = CeShadowBuilder.forDialog();
  }
}

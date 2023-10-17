import { Component } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeContainerBackgroundColor = 'primary' | 'secondary';

/**
 * Base layout component supporting the following core style properties :
 * - background color
 */
@Component({
  selector: 'ce-container',
  template: '<ng-content></ng-content>'
})
export class CeContainerComponent extends CeRenderer {
  override hostClasses = ['block'];
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeUikitModule } from '@codeffekt/ce-uikit';
import { DemoCodeBlockStoreService } from '../core/example-code-block/example-code-block-store.service';
import { BorderAllSidesComponent } from './border/border-all-sides/border-all-sides.component';
import { SimpleRowComponent } from './row/simple-row/simple-row.component';

@NgModule({
  declarations: [
    SimpleRowComponent,
    BorderAllSidesComponent,
  ],
  imports: [
    CommonModule,
    CeUikitModule
  ]
})
export class ExamplesModule {

  constructor(storeService: DemoCodeBlockStoreService) {
    storeService.setComponents({
      'row/simple-row': SimpleRowComponent,
      'border/border-all-sides': BorderAllSidesComponent
    })
  }
}

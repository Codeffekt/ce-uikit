import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeUikitModule } from '@codeffekt/ce-uikit';
import { DemoCodeBlockStoreService } from '../../core/example-code-block/example-code-block-store.service';
import { DemoCodeBlockModule } from '../../core/example-code-block/example-code-block.module';
import { SimpleRowComponent } from '../../examples/row/simple-row/simple-row.component';
import { RowPageComponent } from './row-page.component';

@NgModule({
  declarations: [
    RowPageComponent
  ],
  imports: [
    CommonModule,
    DemoCodeBlockModule,
    CeUikitModule
  ]
})
export class RowPageModule {

  constructor(storeService: DemoCodeBlockStoreService) {
    storeService.setComponents({
      'layout/row/examples/example-row-basic': SimpleRowComponent
    })
  }
}

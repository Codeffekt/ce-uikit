import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderPageComponent } from './border-page.component';
import { BorderRoutingModule } from './border-routing.module';
import { CeUikitModule } from '@codeffekt/ce-uikit';
import { DemoCodeBlockModule } from '../core/example-code-block/example-code-block.module';

@NgModule({
  declarations: [
    BorderPageComponent
  ],
  imports: [
    CommonModule,
    BorderRoutingModule,
    DemoCodeBlockModule,
    CeUikitModule
  ]
})
export class BorderModule { }

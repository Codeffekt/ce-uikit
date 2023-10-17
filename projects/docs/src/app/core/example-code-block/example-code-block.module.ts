import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleCodeBlockComponent } from './example-code-block.component';
import { CeUikitModule } from '@codeffekt/ce-uikit';
import { ExamplesModule } from '../../examples/examples.module';

@NgModule({
  declarations: [
    ExampleCodeBlockComponent
  ],
  imports: [
    CommonModule,
    CeUikitModule,
    ExamplesModule
  ],
  exports: [
    ExampleCodeBlockComponent
  ]
})
export class DemoCodeBlockModule { }

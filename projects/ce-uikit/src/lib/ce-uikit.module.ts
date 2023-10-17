import { NgModule } from '@angular/core';
import { CeComponentsModule } from './components';
import { CeLayoutModule } from './layout/layout.module';
import { CeUtilitiesModule } from './utilities';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CeLayoutModule,
    CeUtilitiesModule,
    CeComponentsModule
  ]
})
export class CeUikitModule { }

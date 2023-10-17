import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeToastComponent } from './toast.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeTextModule } from '../text';
import { CeToastBackgroundColor, CeToastTextColor } from './toast.pipe';

@NgModule({
  declarations: [
    CeToastComponent,
    CeToastBackgroundColor,
    CeToastTextColor
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeUtilitiesModule,
    CeTextModule
  ],
  exports: [
    CeToastComponent
  ]
})
export class CeToastModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeButtonComponent } from './button.component';
import { CeUtilitiesModule } from '../../utilities';
import { CeLayoutModule } from '../../layout';
import { CeTextModule } from '../text';
import { CeIconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    CeButtonComponent,
    CeIconButtonComponent
  ],
  imports: [
    CommonModule,
    CeTextModule,
    CeLayoutModule,
    CeUtilitiesModule,
  ],
  exports:[
    CeButtonComponent,
    CeIconButtonComponent
  ]
})
export class CeButtonModule { }

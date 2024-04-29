import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeTabItemComponent } from './tab-item/tab-item.component';
import { TabsComponent } from './tabs/tabs.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeTextModule } from '../text';
import { TabItemLabelComponent } from './tab-item-label/tab-item-label.component';
import { CeButtonModule } from '../button';

@NgModule({
  declarations: [
    CeTabItemComponent,
    TabsComponent,
    TabItemLabelComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeUtilitiesModule,
    CeTextModule,
    CeButtonModule
  ],
  exports: [
    CeTabItemComponent,
    TabsComponent
  ]
})
export class CeTabsModule { }

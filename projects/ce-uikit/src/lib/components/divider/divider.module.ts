import { NgModule } from '@angular/core';
import { CeDividerComponent } from './divider.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';

@NgModule({
    imports: [
        CeLayoutModule,
        CeUtilitiesModule
    ],
    exports: [
        CeDividerComponent
    ],
    declarations: [
        CeDividerComponent
    ],
    providers: [],
})
export class CeDividerModule { }

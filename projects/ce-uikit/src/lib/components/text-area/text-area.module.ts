import { NgModule } from '@angular/core';
import { CeTextAreaComponent } from './text-area.component';
import { FormsModule } from '@angular/forms';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';

@NgModule({
    imports: [
        FormsModule,
        CeLayoutModule,
        CeUtilitiesModule
    ],
    exports: [
        CeTextAreaComponent
    ],
    declarations: [
        CeTextAreaComponent
    ],
    providers: [],
})
export class CeTextAreaModule { }

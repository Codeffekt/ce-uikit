import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeDialogActionsComponent } from './dialog-actions/dialog-actions.component';
import { CeDialogContentComponent } from './dialog-content/dialog-content.component';
import { CeDialogTitleComponent } from './dialog-title/dialog-title.component';
import { CeDialogComponent } from './dialog.component';
import { CeTextModule } from '../text';
import { CeUtilitiesModule } from '../../utilities';
import { CeLayoutModule } from '../../layout';
import { CeIconModule } from '../icon';
import { CeButtonModule } from '../button';

@NgModule({
    imports: [
        CommonModule,
        CeTextModule,
        CeIconModule,
        CeButtonModule,
        CeLayoutModule,
        CeUtilitiesModule
    ],
    declarations: [
        CeDialogComponent,
        CeDialogActionsComponent,
        CeDialogContentComponent,
        CeDialogTitleComponent
    ],
    exports: [
        CeDialogComponent,
        CeDialogActionsComponent,
        CeDialogContentComponent,
        CeDialogTitleComponent
    ],
    providers: [],
})
export class CeDialogModule { }

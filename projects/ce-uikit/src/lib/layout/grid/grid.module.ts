import { NgModule } from '@angular/core';
import { CeGridComponent } from './grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CeGridComponent
    ],
    declarations: [
        CeGridComponent
    ],
    providers: [],
})
export class CeGridModule { }

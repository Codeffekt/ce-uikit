import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeTextModule } from '../text';
import { CeColorPickerComponent } from './color-picker.component';
import { CeGradientComponent } from './gradient/gradient.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSwatchesComponent } from './color-swatches/color-swatches.component';
import { ColorTintComponent } from './color-tint/color-tint.component';
import { ColorOpacityComponent } from './color-opacity/color-opacity.component';
import { ColorHandlerComponent } from './color-handler/color-handler.component';
import { GradientPickerComponent } from './gradient/gradient-picker/gradient-picker.component';

@NgModule({
  declarations: [
    CeColorPickerComponent,
    CeGradientComponent,
    ColorPaletteComponent,
    ColorSwatchesComponent,
    ColorTintComponent,
    ColorOpacityComponent,
    ColorHandlerComponent,
    GradientPickerComponent,
  ],
  imports: [
    CommonModule,
    CeTextModule,
    CeLayoutModule,
    CeUtilitiesModule,
  ],
  exports: [
    CeColorPickerComponent
  ]
})
export class CeColorPickerModule { }

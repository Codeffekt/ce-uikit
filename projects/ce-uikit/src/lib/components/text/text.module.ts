import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeTextBodyOneComponent } from './text-body-one/text-body-one.component';
import { CeTextBodyTwoComponent } from './text-body-two/text-body-two.component';
import { CeTextHeadingFiveComponent } from './text-heading-five/text-heading-five.component';
import { CeTextHeadingSixComponent } from './text-heading-six/text-heading-six.component';
import { CeTextSmallComponent } from './text-small/text-small.component';
import { CeTextHeadingFourComponent } from './text-heading-four/text-heading-four.component';
import { CeTextHeadingThreeComponent } from './text-heading-three/text-heading-three.component';
import { CeTextHeadingTwoComponent } from './text-heading-two/text-heading-two.component';
import { CeTextHeadingOneComponent } from './text-heading-one/text-heading-one.component';

@NgModule({
  declarations: [
    CeTextBodyOneComponent,
    CeTextBodyTwoComponent,
    CeTextSmallComponent,
    CeTextHeadingSixComponent,
    CeTextHeadingFiveComponent,
    CeTextHeadingFourComponent,
    CeTextHeadingThreeComponent,
    CeTextHeadingTwoComponent,
    CeTextHeadingOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeTextBodyOneComponent,
    CeTextBodyTwoComponent,
    CeTextSmallComponent,
    CeTextHeadingSixComponent,
    CeTextHeadingFiveComponent,
    CeTextHeadingFourComponent,
    CeTextHeadingThreeComponent,
    CeTextHeadingTwoComponent,
    CeTextHeadingOneComponent
  ]
})
export class CeTextModule { }

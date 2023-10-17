import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeOverflowDirective } from './overflow.directive';

@NgModule({
  declarations: [
    CeOverflowDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    CeOverflowDirective
  ]
})
export class CeOverflowModule { }

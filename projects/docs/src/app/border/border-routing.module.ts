import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderPageComponent } from './border-page.component';

const routes: Routes = [
  {
    path: '',
    component: BorderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorderRoutingModule { }

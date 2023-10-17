import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowPageComponent } from './row/row-page.component';

const routes: Routes = [
  {
    path: 'row',
    component: RowPageComponent 
  },
  {
    path: '',
    redirectTo: 'row',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

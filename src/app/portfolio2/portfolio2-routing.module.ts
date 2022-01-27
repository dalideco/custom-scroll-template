import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Portfolio2Component } from './portfolio2.component';

const routes: Routes = [
  {
    path:'',
    component:Portfolio2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Portfolio2RoutingModule { }

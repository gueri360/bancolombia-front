import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoerDashboardComponent} from "./doer-dashboard/doer-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component:DoerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoerRoutingModule { }

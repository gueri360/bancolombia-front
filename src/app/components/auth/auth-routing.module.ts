import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabLoginComponent} from "./tab-login/tab-login.component";

const routes: Routes = [
  { path: '',
    component: TabLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

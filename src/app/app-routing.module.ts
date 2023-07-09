import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./core/guards/auth/auth.guard";
import {doreGuard} from "./core/guards/doreGuard/dore.guard";
import {clientGuard} from "./core/guards/clientGuard/client.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'doer',
    canMatch: [authGuard, doreGuard],
    loadChildren: () => import('./components/doer/doer.module').then(m => m.DoerModule)
  },
  {
    path: 'client',
    canMatch: [authGuard, clientGuard],
    loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

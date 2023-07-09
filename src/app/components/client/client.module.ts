import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import {CommonsComponentModule} from "../commons-component/commons-component.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {TaskFormComponent} from "./task-form/task-form.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ClientDashboardComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CommonsComponentModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }

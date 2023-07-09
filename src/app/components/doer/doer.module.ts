import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoerRoutingModule } from './doer-routing.module';
import { DoerDashboardComponent } from './doer-dashboard/doer-dashboard.component';
import {CommonsComponentModule} from "../commons-component/commons-component.module";
import {NgxSpinnerModule} from "ngx-spinner";
import { AbilitiesFormComponent } from './abilities-form/abilities-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AbilitieListComponent } from './abilitie-list/abilitie-list.component';


@NgModule({
  declarations: [
    DoerDashboardComponent,
    AbilitiesFormComponent,
    AbilitieListComponent
  ],
  imports: [
    CommonModule,
    DoerRoutingModule,
    CommonsComponentModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoerModule { }

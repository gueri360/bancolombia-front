import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import { RegisterComponent } from './register/register.component';
import { TabLoginComponent } from './tab-login/tab-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TabLoginComponent
  ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AuthRoutingModule
    ]
})
export class AuthModule { }

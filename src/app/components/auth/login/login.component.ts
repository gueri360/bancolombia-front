import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../core/services/login/login.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  error =false;

  constructor(
    private formBuilder: FormBuilder,
    private loginServices: LoginService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit() {
    console.log(this.loginForm.value);
    this.loginServices.login(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.error = false;
          if(res === 'DOER' ) {
            this.router.navigate(['doer']).then()
          } else {
            this.router.navigate(['client']).then()
          }
        },
        error: (e) =>{
          this.error = true;
          console.log(e)
        },
        complete: () => console.info('complete')
        }
      )
  }

}




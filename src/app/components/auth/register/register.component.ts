import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../../core/services/register/register.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  error = false;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      userType: ['', [Validators.required]],
    });
  }


  onSubmit() {
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value)
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

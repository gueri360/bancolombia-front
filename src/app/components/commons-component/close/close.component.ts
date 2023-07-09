import { Component } from '@angular/core';
import {LoginService} from "../../../core/services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss']
})
export class CloseComponent {

  constructor(
    private loginService: LoginService,
    private route: Router
  ) {
  }



  close(){
    this.loginService.logout();
    this.route.navigate([''])

  }


}

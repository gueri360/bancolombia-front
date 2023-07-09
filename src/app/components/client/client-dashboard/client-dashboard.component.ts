import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../core/services/login/login.service";
import {Observable, take} from "rxjs";
import {UserModel} from "../../../core/models/user.model";
import {NgxSpinnerService} from "ngx-spinner";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit{

  userInfo:UserModel
  activeTab = 'info'

  constructor(
    private spinner: NgxSpinnerService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.getInfoUser()
      .pipe(take(1))
      .subscribe(res => this.userInfo = res);
  }


  setActiveTab(tab:string){
    this.activeTab = tab;
  }
}

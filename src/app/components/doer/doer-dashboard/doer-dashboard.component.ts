import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Observable, take} from "rxjs";
import {UserModel} from "../../../core/models/user.model";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-doer-dashboard',
  templateUrl: './doer-dashboard.component.html',
  styleUrls: ['./doer-dashboard.component.scss']
})
export class DoerDashboardComponent implements OnInit{

  userInfo:UserModel;
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
     console.log(this.userInfo.id)
  }

  setActiveTab(tab:string){
    this.activeTab = tab;
  }
}

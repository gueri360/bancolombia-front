import { Component } from '@angular/core';
import PocketBase from "pocketbase";

@Component({
  selector: 'app-tab-login',
  templateUrl: './tab-login.component.html',
  styleUrls: ['./tab-login.component.scss']
})
export class TabLoginComponent {

  activeTab = 'login'

  setActiveTab(tab:string){
    this.activeTab = tab;
  }

  closeSection () {
    const pb = new PocketBase('http://127.0.0.1:8090');
    pb.authStore.clear();
  }

}

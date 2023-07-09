import {Component, Input} from '@angular/core';
import {UserModel} from "../../../core/models/user.model";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() userInfo: UserModel

}

import {Component, Input, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {UserModel} from "../../../core/models/user.model";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit{

  user : UserModel
  @Input() rate: number;
  @Input() price: number;
  @Input() id: string;
  constructor(private userService: UserService) {
  }
  ngOnInit() {
   this.userService.getInfoUSerById(this.id).subscribe((res:any) => {
     console.log(res.name)
     this.user = res
   })
  }
}

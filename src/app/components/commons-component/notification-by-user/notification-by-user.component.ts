import {Component, Input, OnInit} from '@angular/core';
import {NotificationsService} from "../../../core/services/notifcation/notifications.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notification-by-user',
  templateUrl: './notification-by-user.component.html',
  styleUrls: ['./notification-by-user.component.scss']
})
export class NotificationByUserComponent implements  OnInit{

  @Input() userType: string;
  @Input() userId: string;

  notificationsList$: Observable<any>
  constructor( private notificationsService: NotificationsService) {
  }


  ngOnInit() {
    this.notificationsList$ = this. notificationsService.getNotificationByUser(this.userId, this.userType);
    this. notificationsService.getNotificationByUser(this.userId, this.userType).subscribe(console.log)
  }

  confirmTask (confirm: boolean, notificationId:string) {
    this.notificationsService.confirmTask(notificationId, confirm);
    this.ngOnInit()
  }
}

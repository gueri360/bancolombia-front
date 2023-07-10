import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { CloseComponent } from './close/close.component';
import { RandomImgComponent } from './random-img/random-img.component';
import { CardUserComponent } from './card-user/card-user.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NotificationByUserComponent } from './notification-by-user/notification-by-user.component';



@NgModule({
    declarations: [
        UserInfoComponent,
        CloseComponent,
        RandomImgComponent,
        CardUserComponent,
        TaskListComponent,
        NotificationByUserComponent,
    ],
  exports: [
    UserInfoComponent,
    CloseComponent,
    CardUserComponent,
    NotificationByUserComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CommonsComponentModule { }

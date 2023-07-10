import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  pb: any
  constructor() {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }


  createNotification ( task : string, doerId: string, clientId: string  ) {
    const data = {
      "doerId": doerId,
      "clientId": clientId,
      "task": task,
      "acceptedByClient": true,
      "acceptedByDoer": false
    };
    this.pb.collection('notifications').create(data);
  }

  getNotificationByUser(id: string, type:string):Observable<any> {
    return from(this.pb.collection('notifications').getList(1,50, {
      filter: `${type}="${id}"`,
      '$autoCancel': false
    }))
  }

  confirmTask(taskId: string, confirm: boolean) {
    this.pb.collection('notifications').update(taskId,
      {acceptedByDoer: confirm,
      notified: true});
  }
}

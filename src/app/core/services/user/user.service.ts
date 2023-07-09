import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {from, map, Observable, of} from "rxjs";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pb: any
  constructor() {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }

  getInfoUser(): Observable<UserModel> {
    return of(this.pb.authStore.model)
      .pipe(map((res:any) => {
        return res
      }))
  }
}

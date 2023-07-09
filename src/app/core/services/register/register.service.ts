import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {UserModel} from "../../models/user.model";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  pb: any

  constructor(private router: Router) {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }

  register(user: UserModel): Observable<string  | boolean> {
    return from(this.pb.collection('users').create(user))
      .pipe(map ((res: any) => {
        return res?.userType
      }))
  }
}

import { Injectable } from '@angular/core';
import PocketBase, {Record} from 'pocketbase'
import {filter, from, map, Observable, of} from "rxjs";
import {LoginModel, NewUser, UserModel} from "../../models/user.model";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  pb: any

  constructor(private router: Router) {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }



  login(user: LoginModel): Observable<string | boolean> {
    return from(this.pb.collection('users')
      .authWithPassword(user.email, user.password))
      .pipe(
        map((newUser: any) =>  {
          if(newUser.record) {
             return newUser.record.userType
          } else {
            return false
          }
        })
    )
  }

  logout () {
    this.pb.authStore.clear();
    this.router.navigate([''])
  }
}



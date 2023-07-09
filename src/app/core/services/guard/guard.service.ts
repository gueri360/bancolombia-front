import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  pb: any
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private doer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private client$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }

  private isLogged() {
    console.log(this.pb.authStore.isValid)
    this.loggedIn$.next(this.pb.authStore.isValid)
  }

  private isDoer() {
    if(this.pb.authStore?.model?.userType=== 'DOER') {
      this.doer$.next(true)
    }
    return this.doer$
  }

  private isClient() {
    if(this.pb.authStore?.model?.userType=== 'CLIENT') {
      this.client$.next(true)
    }
    return this.client$
  }

  getAuthToken() : Observable<boolean> {
    this.isLogged();
    return this.loggedIn$
  }

  getDoer() : Observable<boolean> {
    this.isDoer();
    return this.doer$
  }

  getClient() : Observable<boolean> {
    this.isClient();
    return this.client$
  }


}

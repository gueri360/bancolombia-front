import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {AbilitiesDoerModels} from "../../models/abilities-doer.models";
import {from, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoerService {
  pb: any

  constructor() {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }



  createAbilities(newAbilities: AbilitiesDoerModels): Observable<AbilitiesDoerModels> {
    return of(this.pb.collection('abilities').create(newAbilities))
  }

  getAbilitiesList(id: string):Observable<any> {
    return from(this.pb.collection('abilities').getList(1, 50, {
      filter: 'doerId = "'+id+'"'
    })).pipe(map((res:any) => {
      return res.items
    }))
  }
}

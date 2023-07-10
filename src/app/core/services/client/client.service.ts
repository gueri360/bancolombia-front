import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {environment} from "../../../../environments/environment";
import {AbilitiesDoerModels} from "../../models/abilities-doer.models";
import {forkJoin, from, map, Observable, of, zip} from "rxjs";
import {TaskModel} from "../../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  pb: any

  constructor() {
    this.pb = new PocketBase(environment.dataBaseUrl);
  }



  createTaskFromClientSide(task: TaskModel): Observable<any> {
    return from(this.pb.collection('task').create(task))
  }

  getDoersByKeyWords(keywords: string[]): Observable<any> {
    const doerObservables: Observable<any>[] = keywords.map((word) =>
      from(
        this.pb.collection('abilities').getList(1, 50, {
          filter: 'description?~"' + word + '"',
          '$autoCancel': false
        })
      )
    );

    return zip(...doerObservables);
  }


//   const observables = elementos.map(elemento => this.clientService.getDoersForTask(elemento));
//
// // Combinar los observables en uno solo
//   forkJoin(observables).subscribe(resultados => {
//   // Lógica después de que todos los observables se completen
// });
}

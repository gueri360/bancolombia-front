import {Validators} from "@angular/forms";

export interface TaskModel {

  name:string;
  description: string;
  date: Date;
  price:number;
  clientId: string,
  abilityId: string
  completed: boolean;
  take: boolean;
}

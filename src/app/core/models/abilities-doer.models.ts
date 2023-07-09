import {UserModel} from "./user.model";

export interface AbilitiesDoerModels {
  "id": string,
  "doerId": string,
  "name": string,
  "description": string,
  "price": number,
  "range": number
  "expand": UserModel
}

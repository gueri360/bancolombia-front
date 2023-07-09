export interface UserModel {
  "username": string,
  "email": string,
  "emailVisibility": true,
  "password": string,
  "passwordConfirm": string,
  "name": string,
  "lastname": string,
  "userType": "DOER" | "CLIENT",
  img: string,
  created: Date,
  id: string
}

export interface LoginModel {
  "email": string,
  "password": string
}

export interface NewUser {
  record: UserModel,
  token: string
}

import { IauthUser } from "./IauthTipes";

export interface credentialsRegisterTipe {
  email: string;
  name: string;
  password: string;
}
export interface credentialsLoginTipe {
  email: string;
  password: string;
}
export interface registerDataType {
  token: string;
  user: IauthUser;
}

import { RoleClass } from "./classes";

export interface UserData {
  class: RoleClass;
  member: boolean;
}

export interface UserDataNew {
  name: string;
  party: string;
}

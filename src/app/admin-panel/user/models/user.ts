// import { Role } from "./role";

import { Gender } from "src/app/shared/enums";

export interface User {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  blocked: boolean;
  registrationDateUTC: string;
  role: string;
}

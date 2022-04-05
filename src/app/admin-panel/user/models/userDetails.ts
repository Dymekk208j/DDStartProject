import { Gender } from "./../../../shared/enums/gender";

export class UserDetails {
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

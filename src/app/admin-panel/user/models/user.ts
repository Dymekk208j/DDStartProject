// import { Role } from "./role";

import { Gender } from 'src/app/shared/enums';

// export class User {
//   public id!: string;
//   public name!: string;
//   public userName!: string;
//   public role!: Role;
//   public emailConfirmed!: boolean;
//   // public verificationToken!: string;
//   public registrationDate!: Date;
//   public blocked!: boolean;

//   // public blockedDate?: string;
//   // public blockedByUserId?: string;
//   // public blockadeReason?: string;
// }


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

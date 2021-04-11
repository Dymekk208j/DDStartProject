import { Role } from "./role";

export class User {
  public id!: string;
  public name!: string;
  public userName!: string;
  public role!: Role;
  public emailConfirmed!: boolean;
  public verificationToken!: string;
  public registrationDate!: string;
  public blocked!: boolean;
  public blockedDate?: string;
  public blockedByUserId?: string;
  public blockadeReason?: string;
}

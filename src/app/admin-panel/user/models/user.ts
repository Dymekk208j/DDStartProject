import { Role } from './role';

export class User {
  public Id!: string;
  public Name!: string;
  public Role!: Role;
  public Verified!: boolean;
  public VerificationToken!: string;
  public RegistrationDate!: string;
  public Blocked!: boolean;
  public BlockedDate?: string;
  public BlockedByUserId?: string;
  public BlockadeReason?: string;
}

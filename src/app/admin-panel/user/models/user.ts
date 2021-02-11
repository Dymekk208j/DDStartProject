import { Role } from './role';

export class User {
  public Id: string;
  public Name: string;
  public Role: Role;
  public Verified: boolean;
  public VerificationToken: string;
}

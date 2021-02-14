import { LoadUsersSuccessParams } from './../models/LoadUsersSuccessParams';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { User } from '../models/user';
import { IServerSideGetRowsRequest } from 'ag-grid-community';

@Injectable({ providedIn: 'root' })
export class UserService {
  private productsUrl = 'api/products';
  // private products: Product[];

  constructor(private http: HttpClient) {}

  fetchMyTestText(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next('Text z servisu');
    });
  }

  fetchUserList(
    request: IServerSideGetRowsRequest
  ): Observable<LoadUsersSuccessParams> {
    return new Observable<LoadUsersSuccessParams>((subscriber) => {
      subscriber.next({
        rowData: [
          {
            Id: '1str',
            Name: 'Administrator1',
            Role: Role.Administrator,
            Verified: true,
            VerificationToken: 'Administrator1VerificationToken',
            RegistrationDate: new Date(),
            Blocked: false,
          },
          {
            Id: '2str',
            Name: 'Moderator1',
            Role: Role.Moderator,
            Verified: true,
            VerificationToken: 'Moderator1VerificationToken',
            RegistrationDate: new Date(),
            Blocked: false,
          },
          {
            Id: '3str',
            Name: 'User1',
            Role: Role.User,
            Verified: true,
            VerificationToken: 'User1VerificationToken',
            RegistrationDate: new Date(),
            Blocked: false,
          },
          {
            Id: '4str',
            Name: 'User2',
            Role: Role.User,
            Verified: true,
            VerificationToken: 'User2VerificationToken',
            RegistrationDate: new Date(),
            Blocked: true,
            BlockedDate: new Date(),
          },
        ],
        rowCount: 3,
      });
    });
  }
}

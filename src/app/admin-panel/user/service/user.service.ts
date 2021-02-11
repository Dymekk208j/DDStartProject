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
            Name: 'User1',
            Role: Role.Administrator,
            Verified: true,
            VerificationToken: 'User1VerificationToken',
          },
          {
            Id: '2str',
            Name: 'User2',
            Role: Role.Administrator,
            Verified: true,
            VerificationToken: 'User2VerificationToken',
          },
          {
            Id: '3str',
            Name: 'User3',
            Role: Role.Administrator,
            Verified: true,
            VerificationToken: 'User3VerificationToken',
          },
        ],
        rowCount: 3,
      });
    });
  }
}

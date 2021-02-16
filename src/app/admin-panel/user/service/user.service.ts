import { LoadUsersSuccessParams } from './../models/LoadUsersSuccessParams';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServerSideGetRowsRequest } from 'ag-grid-community';
import { User } from '../models/user';

import userJsonData from './users.json';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  fetchMyTestText(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next('Text from service');
    });
  }

  fetchUserList(
    request: IServerSideGetRowsRequest
  ): Observable<LoadUsersSuccessParams> {
    return new Observable<LoadUsersSuccessParams>((subscriber) => {
      let data: User[] = userJsonData;

      subscriber.next({
        rowData: data.slice(request.startRow, request.endRow),
        rowCount: data.length,
      });
    });
  }

  blockUser(id: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      if (id) {
        subscriber.next(true);
      } else throw 'API call error';
    });
  }

  fetchUserBlockReasons(): Observable<string[]> {
    return new Observable<string[]>((subscriber) => {
      subscriber.next(['Powód 1', 'Powód 2', 'Powód 3']);
    });
  }
}

import { LoadUsersSuccessParams } from './../models/LoadUsersSuccessParams';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServerSideGetRowsRequest } from 'ag-grid-community';
import { User } from '../models/user';

import userJsonData from './users.json';
import { BlockUserRequest } from '../../shared/dto/requests/blockUserRequest';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  fetchMyTestText(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next('Text from service');
    });
  }

  fetchUserList(
    request: IServerSideGetRowsRequest
  ): Observable<LoadUsersSuccessParams> {
    return new Observable<LoadUsersSuccessParams>((subscriber) => {
      //TODO: dodać obsługę this.translate.currentLang
      let data: User[] = userJsonData;

      subscriber.next({
        rowData: data.slice(request.startRow, request.endRow),
        rowCount: data.length,
      });
    });
  }

  blockUser(request: BlockUserRequest): Observable<boolean> {
    //TODO: dodać obsługę this.translate.currentLang
    request.languageCode = this.translate.currentLang;

    return new Observable<boolean>((subscriber) => {
      if (request) {
        subscriber.next(true);
      } else throw 'API call error';
    });
  }

  fetchUserBlockReasons(): Observable<string[]> {
    //TODO: dodać obsługę this.translate.currentLang

    return new Observable<string[]>((subscriber) => {
      subscriber.next(['Powód 1', 'Powód 2', 'Powód 3']);
    });
  }

  addBlockReason(reason: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      if (reason.length > 0) {
        subscriber.next(true);
      } else throw 'API call error';
    });
  }
}

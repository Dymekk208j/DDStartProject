import { UserDetails } from "./../models/userDetails";
import { AgGridRequest } from "./../../../shared/ag-grid/models/AgGridRequest";
import { LoadUsersSuccessParams } from "./../models/LoadUsersSuccessParams";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BlockUserRequest } from "../../shared/dto/requests/blockUserRequest";
import { TranslateService } from "@ngx-translate/core";
import { RemoveUserRequest } from "../../shared/dto/requests/removeUserRequest";
import { environment } from "src/environments/environment";
import { BlockUserReason } from '../models';

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  fetchMyTestText(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next("Text from service");
    });
  }

  fetchUserList(request: AgGridRequest): Observable<LoadUsersSuccessParams> {
    //TODO: dodać obsługę this.translate.currentLang
    let url: string = environment.apiUrl + "AdminPanel/Users/GetUsersList";

    return this.http.post<LoadUsersSuccessParams>(url, request);
  }

  blockUser(request: BlockUserRequest): Observable<boolean> {
    let url: string = environment.apiUrl + "AdminPanel/Users/BlockUser";

    return this.http.post<boolean>(url, request);
  }

  fetchUserBlockReasons(): Observable<BlockUserReason[]> {
    let url: string = environment.apiUrl + "AdminPanel/Users/GetBlockUserReasonList";
    return this.http.get<BlockUserReason[]>(url);
  }

  addBlockReason(reason: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      if (reason.length > 0) {
        subscriber.next(true);
      } else throw "API call error";
    });
  }

  removeUser(request: RemoveUserRequest): Observable<boolean> {
    //TODO: dodać obsługę this.translate.currentLang
    // request.languageCode = this.translate.currentLang; // TODO: nie działa

    return new Observable<boolean>((subscriber) => {
      if (request) {
        subscriber.next(true);
      } else throw "API call error";
    });
  }

  fetchUserDetails(userId: string): Observable<UserDetails> {
    //TODO: dodać obsługę this.translate.currentLang
    let url: string = environment.apiUrl + `AdminPanel/Users/GetUserDetails`;
    const params = new HttpParams().append("Id", userId);

    return this.http.get<UserDetails>(url, { params: params });
  }
}

import { LoadUsersSuccessParams } from "./../models/LoadUsersSuccessParams";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IServerSideGetRowsRequest } from "ag-grid-community";

import { BlockUserRequest } from "../../shared/dto/requests/blockUserRequest";
import { TranslateService } from "@ngx-translate/core";
import { RemoveUserRequest } from "../../shared/dto/requests/removeUserRequest";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  fetchMyTestText(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next("Text from service");
    });
  }

  fetchUserList(request: IServerSideGetRowsRequest): Observable<LoadUsersSuccessParams> {
    //TODO: dodać obsługę this.translate.currentLang
    console.log("Request", request);

    let url: string = environment.apiUrl + "AdminPanel/Users/GetUsersList";

    return this.http.post<LoadUsersSuccessParams>(url, request);
  }

  blockUser(request: BlockUserRequest): Observable<boolean> {
    //TODO: dodać obsługę this.translate.currentLang
    // request.languageCode = this.translate.currentLang; // TODO: nie działa

    return new Observable<boolean>((subscriber) => {
      if (request) {
        subscriber.next(true);
      } else throw "API call error";
    });
  }

  fetchUserBlockReasons(): Observable<string[]> {
    //TODO: dodać obsługę this.translate.currentLang
    //TODO: Testowe zadanie
    return new Observable<string[]>((subscriber) => {
      subscriber.next(["Powód 1", "Powód 2", "Powód 3"]);
    });
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
}

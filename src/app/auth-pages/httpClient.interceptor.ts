import { AuthService } from "./services/auth.service";

import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

import { State } from "../auth-pages/state/auth.state";
import { getLoggedUser } from "../auth-pages/state/auth.selectors";
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, private store: Store<State>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user$ = this.store.select(getLoggedUser);

    let token: string | undefined; //TODO: Dodać pobieranie tokena ze store
    user$.pipe(take(1)).subscribe((u) => (token = u?.Token));

    if (token !== undefined) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}

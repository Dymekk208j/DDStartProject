import { AuthService } from "./services/auth.service";

import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string = ""; //TODO: Dodać pobieranie tokena ze store

    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${token}`,
      }
    });
    return next.handle(request);
  }
}

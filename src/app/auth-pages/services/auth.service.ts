import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IsUsernameAvailableResponse, IsEmailAvailableResponse, LoginResponse, RegisterResponse } from "./../dto/responses";
import { IsUsernameAvailableRequest, IsEmailAvailableRequest, LoginRequest, RegisterRequest } from "./../dto/requests";

@Injectable({ providedIn: "root" })
export class AuthService {
  private authService = "https://localhost:44327/api/auth/";

  constructor(private http: HttpClient) {}

  loginUser(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authService + "login", request);
  }

  registerUser(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.authService + "register", request);
  }

  isEmailAvailable(request: IsEmailAvailableRequest): Observable<IsEmailAvailableResponse> {
    let params = new HttpParams();
    params = params.append("Email", request.Email);

    return this.http.get<IsEmailAvailableResponse>(this.authService + "IsEmailAvailable", { params });
  }

  isUsernameAvailable(request: IsUsernameAvailableRequest): Observable<IsUsernameAvailableResponse> {
    let params = new HttpParams();
    params = params.append("Username", request.Username);

    return this.http.get<IsUsernameAvailableResponse>(this.authService + "IsUsernameAvailable", { params });
  }
}

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IsUsernameAvailableResponse, IsEmailAvailableResponse, LoginResponse, RegisterResponse } from "./../dto/responses";
import { IsUsernameAvailableRequest, IsEmailAvailableRequest, LoginRequest, RegisterRequest } from "./../dto/requests";
import { User } from "../models/user";

const LOGGED_USER_DATA_KEY: string = "LoggedUser.Data";

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

  saveUserDataToLocalStorage(user: User): void {
    localStorage.setItem(LOGGED_USER_DATA_KEY, JSON.stringify(user));
  }

  restoreUserFromLocalStorage(): User | null {
    let userJson: string | null = localStorage.getItem(LOGGED_USER_DATA_KEY);
    if (userJson === null) return null;

    let user: User = JSON.parse(userJson);
    return user;
  }

  removeUserFromLocalStorage() {
    let userJson: string | null = localStorage.getItem(LOGGED_USER_DATA_KEY);
    if (userJson !== null) localStorage.removeItem(LOGGED_USER_DATA_KEY);
  }
}

import { LoginResponse } from './../dto/responses/loginResponse';
import { LoginRequest } from './../dto/requests/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/admin-panel/user/models/user';
import { RegisterRequest } from '../dto/requests/registerRequest';
import { RegisterResponse } from '../dto/responses/registerResponse';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authService = 'https://localhost:44327/api/auth/';

  constructor(private http: HttpClient) {}

  loginUser(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authService + 'login', request);
  }

  registerUser(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      this.authService + 'register',
      request
    );
  }
}

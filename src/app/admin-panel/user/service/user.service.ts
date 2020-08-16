import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  fetchUserList(): Observable<string[]> {
    return new Observable<string[]>((subscriber) => {
      subscriber.next(['user1', 'user2']);
    });
  }
}

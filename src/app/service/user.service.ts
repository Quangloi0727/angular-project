import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../modal/user.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public API: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }
}

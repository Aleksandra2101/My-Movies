import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config} from "./config";
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
  
  }

  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          this.currentUserSubject.next(user)
          console.log(this.currentUserSubject.value)
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));

        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    console.log(this.currentUserSubject.value)
  }
}

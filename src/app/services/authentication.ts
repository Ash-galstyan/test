import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public loginOrRegister(user: any, method: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    if (method === 'login') {
      return this.http.get('/api/login', user);
    } else {
      return this.http.post('/api/CreateUser', user, {
        headers: new HttpHeaders(headers)
      });
    }
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  // TODO // This would be the code for getting the user details and checking for logged in user, unfortunately the API provided doesn't seem to return or register users, so I commented this section out to not have any authentication guards'

  // public getUserDetails(): any {
  //   const token = this.getToken();
  //   let payload;
  //   if (token) {
  //     payload = token.split('.')[1];
  //     payload = window.atob(payload);
  //     return JSON.parse(payload);
  //   } else {
  //     return null;
  //   }
  // }
  //
  // public isLoggedIn(): boolean {
  //   const user = this.getUserDetails();
  //   if (user) {
  //     return user.exp > Date.now() / 1000;
  //   } else {
  //     return false;
  //   }
  // }
}

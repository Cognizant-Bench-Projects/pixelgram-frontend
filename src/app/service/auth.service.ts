import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${environment.userUri}/login`;
  user: User = new User();

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    
    this.user.email = email;
    this.user.pass = password;
    
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(this.url, this.user, httpOption).toPromise();
	}
}

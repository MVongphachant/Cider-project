import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'

import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

interface AuthResData {
  username: string,
  token: string,
  createdAt: any,
  expiresIn: number,
  _id: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              private router: Router) { }

  signupUser(username: string, email: string, password: string) {
    const authData: AuthData = { username, email, password }
    this.http.post('http://localhost:3000/api/users/signup', authData)
      .subscribe(userData => {
        console.log(userData)
        this.router.navigate(['/home'])
      })
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = { email, password }
    this.http.post<AuthResData>('http://localhost:3000/api/users/login', authData)
      .pipe(tap((resData) => {
        const expirationDate = new Date(new Date().getTime() + +resData)
        const currentUser = new User(resData.username, resData.token, resData.createdAt, expirationDate, resData._id);
        this.user.next(currentUser)
      }))
      .subscribe(userData => {
        console.log(userData)
        this.router.navigate(['/home'])
      })
  }

}



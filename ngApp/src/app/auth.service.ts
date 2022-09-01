import { Router } from '@angular/router';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/api/register"
  private _loginUrl="http://localhost:3000/api/login"
  constructor(private http:HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user:User){
    return this.http.post<any>(this._loginUrl,user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

loggedIn(){
  return !!localStorage.getItem('token')
}

getToken(){
  return localStorage.getItem('token')
}

}

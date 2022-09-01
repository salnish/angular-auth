import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:User ={
    email:'',
    password:''
  }
  errorMsg:string

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
   this._auth.loginUser(this.loginUserData)
   .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this._router.navigate(['/special'])
      console.log(res)
    },
    err => {
      if( err instanceof HttpErrorResponse) {
      this.errorMsg =err.error
      }
    }
   )
  }

}

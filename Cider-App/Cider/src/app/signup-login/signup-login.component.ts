import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {
  isLogin: boolean = true;

  constructor(private http: HttpClient) { }

  onSignUp(form: NgForm) {

  }

  onLogin(form: NgForm) {

  }

  onSwitchForm() {
    this.isLogin = !this.isLogin;
  }

}

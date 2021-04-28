import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {
  isLogin: boolean = true;

  constructor(private authService: AuthService) { }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signupUser(form.value.username, form.value.email, form.value.password);
    form.reset()
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.email, form.value.password);
    form.reset()
  }

  onSwitchForm() {
    this.isLogin = !this.isLogin;
  }

}

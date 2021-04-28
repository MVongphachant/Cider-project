import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';

const routes: Routes = [
  { path: 'signup-login', component: SignupLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

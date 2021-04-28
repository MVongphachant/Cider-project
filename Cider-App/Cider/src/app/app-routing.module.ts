import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup-login', component: SignupLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

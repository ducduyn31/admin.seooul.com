import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
  {path: 'home', loadChildren: 'app/dashboard/pages.module#PagesModule', canActivate: [AuthGuard], canDeactivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent, children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

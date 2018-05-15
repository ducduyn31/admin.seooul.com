import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {NbMenuModule, NbThemeModule} from "@nebular/theme";
import {DashboardModule} from "./dashboard/dashboard/dashboard.module";
import { AuthComponent } from './auth/auth.component';
import {AuthModule} from "./auth/auth.module";
import {AuthGuard} from './auth-guard.service';
import {NB_AUTH_TOKEN_CLASS, NbAuthJWTToken, NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {UsernamePassAuthProvider} from './auth/username-pass-auth.provider';
import {NbSecurityModule} from '@nebular/security';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './dashboard/pages.component';
import {PagesModule} from './dashboard/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'default'}),
    AuthModule,
    PagesModule
  ],
  providers: [
    AuthGuard,
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken},
    { provide: NbTokenStorage, useClass: NbTokenLocalStorage},
    UsernamePassAuthProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

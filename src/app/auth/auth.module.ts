import {NgModule} from '@angular/core';
import {AuthComponent} from "./auth.component";
import {NbAbstractAuthProvider, NbAuthModule} from "@nebular/auth";
import {NbCheckboxModule} from '@nebular/theme';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UsernamePassAuthProvider} from './username-pass-auth.provider';
import {getDeepFromObject} from '@nebular/auth/helpers';
import {environment} from '../../environments/environment';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@NgModule({
  imports: [
    NbAuthModule.forRoot({
      providers: {
        custom: {
          service: UsernamePassAuthProvider,
          config: {
            ...AuthModule.functionOptions,
            token: {
              key: 'token',
              getter: (module: string, res: HttpResponse<Object>, context?: NbAbstractAuthProvider) => getDeepFromObject(res.body, context.getConfigValue('token.key'))
            },
            errors: {
              key: 'errors',
              getter: (module: string, res: HttpErrorResponse, context?: NbAbstractAuthProvider) => getDeepFromObject(res.error, context.getConfigValue('errors.key'), context.getConfigValue(`${module}.defaultErrors`))
            },
            messages: {
              key: 'messages',
              getter: (module: string, res: HttpResponse<Object>, context?: NbAbstractAuthProvider) => getDeepFromObject(res.body, context.getConfigValue('messages.key'), context.getConfigValue(`${module}.defaultMessages`))
            }
          }
        }
      },
      forms: {
        login: {
          redirectDelay: 100,
          provider: 'custom',
          rememberMe: true,
          showMessages: {
            success: true,
            error: true
          }
        },
        validation: {
          username: {
            required: true,
            minLength: 5
          },
          password: {
            required: true,
            minLength: 4,
            maxLength: 30
          }
        }
      }
    }),
    FormsModule,
    CommonModule,
    NbCheckboxModule,
    RouterModule
  ],
  declarations: [AuthComponent, LoginComponent],
  exports: [AuthComponent]
})
export class AuthModule {
  static functionOptions: AuthFunctionOptions = {
    baseEndpoint: environment.apiServer + 'auth',
    login: {
      endpoint: '/signin?monitor=true',
      method: 'post',
      redirect: {
        success: '/',
        failure: null
      }
    },
    register: false,
    requestPass: false,
    resetPass: false,
  }
}

interface AuthFunctionOptions {

}

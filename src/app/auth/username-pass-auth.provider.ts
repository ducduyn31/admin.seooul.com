import {Injectable} from '@angular/core';
import {NbAbstractAuthProvider, NbAuthResult} from '@nebular/auth';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of as observableOf} from 'rxjs/observable/of';

@Injectable()
export class UsernamePassAuthProvider extends NbAbstractAuthProvider {

  private dummyFunction = observableOf(
    new NbAuthResult(
      false,
      {},
      '/',
      false,
      'Function has been blocked'
    )
  );

  constructor(private _http: HttpClient) {
    super();
  }

  logout(): Observable<NbAuthResult> {
    return this.dummyFunction;
  }

  register(data?: any): Observable<NbAuthResult> {
    return this.dummyFunction
  }

  requestPassword(data?: any): Observable<NbAuthResult> {
    return this.dummyFunction;
  }

  resetPassword(data?: any): Observable<NbAuthResult> {
    return this.dummyFunction;
  }

  authenticate(data?: any): Observable<NbAuthResult> {
    const method = this.getConfigValue('login.method');
    const url = this.getActionEndpoint('login');

    return this._http.request(method, url, {body: data, observe: 'response'}).pipe(
      map(res => {
        return new NbAuthResult(
          true,
          res,
          this.getConfigValue('login.redirect.success'),
          [],
          this.getConfigValue('messages.getter')('login', res, this),
          this.getConfigValue('token.getter')('login', res, this))
      }),
      catchError(res => {
        let errors = [];

        if (res instanceof HttpErrorResponse) {
          errors = this.getConfigValue('errors.getter')('login', res, this);
        } else {
          errors.push('Something went wrong');
        }

        return observableOf(
          new NbAuthResult(
            false,
            res,
            this.getConfigValue('login.redirect.failure'),
            errors
          ));
      })
    );
  }

  private getActionEndpoint(action: string): string {
    const actionEndpoint: string = this.getConfigValue(`${action}.endpoint`);
    const baseEndpoint: string = this.getConfigValue('baseEndpoint');
    return baseEndpoint + actionEndpoint;
  }
}

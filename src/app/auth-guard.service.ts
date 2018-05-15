import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {NbAuthService} from '@nebular/auth';
import {map, tap} from 'rxjs/operators';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<DashboardComponent> {

  constructor(private nbAuth: NbAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.nbAuth.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['auth'])
        }
      })
    );
  }

  canDeactivate(component: DashboardComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.nbAuth.isAuthenticated().pipe(
      map(authenticated => {
        return !authenticated;
      })
    );
  }
}

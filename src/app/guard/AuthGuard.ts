import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO this section is commented out to always return true, so that the tracks page can be loaded, I couldn't establish a connection with the API provided, normally this would check to see if the user is logged in or not
    // if (!this.auth.isLoggedIn()) {
    //   this.router.navigateByUrl('/');
    //   return false;
    // }
    return true;
  }
}

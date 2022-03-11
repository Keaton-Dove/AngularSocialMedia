import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from '../functionality';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.userService.activeUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
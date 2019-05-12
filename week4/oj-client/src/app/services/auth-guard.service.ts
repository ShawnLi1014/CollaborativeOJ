import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(@Inject('auth') private auth, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/problems']);
      return false;
    }
  }

  isAdmin(): boolean {
    const key = 'https://myapp.example.com/authorization';
    return !!(typeof (this.auth.userProfile) !== 'undefined'
      && this.auth.isAuthenticated()
      && this.auth.userProfile[key].roles.includes('admin'));
  }
}

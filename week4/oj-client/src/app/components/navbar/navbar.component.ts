import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Let's Code";
  username: string;
  profile: any;
  searchBox: FormControl = new FormControl();
  subscription: Subscription;

  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
              private router: Router) { }

  ngOnInit() {
    this.auth.userNameChange$.subscribe(username => this.username = username);
    const debouncedInput = this.searchBox.valueChanges.pipe(debounceTime(500));
    this.subscription = debouncedInput.subscribe(term => this.input.changeInput(term));
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }

  searchProblem() {
    this.router.navigate(['/problems']);
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

}

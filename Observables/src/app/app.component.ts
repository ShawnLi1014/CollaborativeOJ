import { Component, OnInit} from '@angular/core';
import { Observable, fromEvent, from} from 'rxjs';
import { Subject } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Observables';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // const btn = document.querySelector('#btn');
    // const btnStream$ = fromEvent(btn, 'click');
    //
    // btnStream$.subscribe(
    //   (e: any) => console.log(e.target.innerHTML),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );
    //
    // const input = document.querySelector('#input');
    // const inputStream$ = fromEvent(input, 'keyup');
    //
    // inputStream$.subscribe(
    //   (e: any) => console.log(e.target.value),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );
    // const numbers = [1, 2, 4, 5, 6, 6];
    // const numbers$ = from(numbers);
    // numbers$.subscribe(
    //   (e: any) => console.log(e),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );

    //   let promise = new Promise(resolve => {
    //     console.log('promise execution');
    //     setTimeout(() => {
    //       resolve('promise resolved');
    //     }, 1000);
    //   });
    //
    //   promise.then(value => console.log(value));
    //
    //   let stream$ = new Observable(observer => {
    //     console.log('observable execution');
    //     observer.next(1);
    //     observer.next(2);
    //     let timeout = setTimeout(() => {
    //       observer.next('observer next value');
    //     }, 1000);
    //     observer.next(3);
    //
    //     return () => {
    //       clearTimeout(timeout);
    //     };
    //   });
    //
    //   let observer = {
    //     next: value => console.log(value),
    //     error: err => console.log(err),
    //     complete: () => console.log('completed!')
    //   };
    //
    //   let subscription = stream$.subscribe(
    //      value => console.log(value),
    //     err => console.log(err),
    //     () => console.log('completed!')
    // );
    //   setTimeout(() => {
    //     subscription.unsubscribe();
    //   }, 500);
    // let subject = new Subject();

    // a subject is an observable and also an observer
    // subject.subscribe(
    //   v => console.log('observerA' + v)
    // );
    // subject.subscribe(
    //   v => console.log('observerB' + v)
    // );
    // subject.next(1);
    // subject.next(2);
    //
    // subject.subscribe(
    //   v => console.log('observerC' + v)
    // );
    // subject.next(3);
    //
    // let observable = new Observable(observer => {
    //   observer.next(1);
    //   observer.next(2);
    // });
    //
    // observable.subscribe(
    //   v => console.log('observerAnew' + v)
    // );
    // observable.subscribe(
    //   v => console.log('observerBnew' + v)
    // );

    // BehaviorSubject is one of the variants of Subjects, which has a notion of "the current value"

    // this.getUser('Shawnli1014').subscribe(
    //   v => console.log(v)
    // );
  }

  // getUser(username) {
  //   return this.http.get('http://api.github.com/users/' + username);
  // }
}


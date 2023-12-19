import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subject = new BehaviorSubject('init ;');
  firstSubscriptionString = '';
  secondSubscriptionString = '';

  constructor() {
    this.subject.subscribe(value => {
      console.log(`Subscription init: ${value}`);
    });

    this.subject.next('1');
    this.subject.next('2');

    this.subject.subscribe(value => {
      console.log(`Subscription 1: ${value}`);
      this.firstSubscriptionString += `${value}; `;
    });

    this.subject.next('3');
    this.subject.next('4');

    this.subject.subscribe(value => {
      console.log(`Subscription 2: ${value}`);
      this.secondSubscriptionString += `${value}; `;

    });

    this.subject.next('5');
    this.subject.next('6');

    console.log(`getValue: ${this.subject.getValue()}`);
  }
}

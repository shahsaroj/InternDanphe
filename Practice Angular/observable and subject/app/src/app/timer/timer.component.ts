// timer.component.ts
import { Component, OnDestroy } from '@angular/core';
// import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  template: `
    <h2>Timer Example</h2>
    <p>Elapsed Time: {{ elapsedTime }}</p>
  `
})
export class TimerComponent implements OnDestroy {
  elapsedTime = 0;
  timerSubscription: Subscription;

  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.startTimer(1000).subscribe((time: number) => {
      this.elapsedTime = time;
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}

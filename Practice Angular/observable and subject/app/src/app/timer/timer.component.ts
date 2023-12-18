// timer.component.ts
import { Component, OnDestroy } from '@angular/core';
// import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  template: `
    <h2>Timer </h2>
    <p>Elapsed Time: {{ elapsedTime }}</p>
    <button (click)="toggleTimer()">{{ timerPaused ? 'Resume' : 'Pause' }} Timer</button>
    <button (click)="resetTimer()">Reset Timer</button>
    <input type="number" [(ngModel)]="newInterval" placeholder="Interval in ms">
    <button (click)="changeInterval()">Change Interval</button>
  `
})
export class TimerComponent implements OnDestroy {
  elapsedTime = 0;
  timerPaused = false;
  timerSubscription: Subscription;
  pausedStatusSubscription: Subscription;
  newInterval!: number;

  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.startTimer().subscribe(() => {
      this.elapsedTime = this.timerService.getElapsedTime();
    });

    this.pausedStatusSubscription = this.timerService.getPausedStatus().subscribe((paused: boolean) => {
      this.timerPaused = paused;
    });
  }

  toggleTimer() {
    if (this.timerPaused) {
      this.timerService.resumeTimer();
    } else {
      this.timerService.pauseTimer();
    }
  }

  resetTimer() {
    this.timerService.resetTimer();
    this.elapsedTime = this.timerService.getElapsedTime();
  }

  changeInterval() {
    if (this.newInterval > 0) {
      this.timerService.changeInterval(this.newInterval);
    }
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    this.pausedStatusSubscription.unsubscribe();
  }
}

// timer.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer$!: Observable<number>;
  private timerPaused$: Subject<boolean> = new Subject<boolean>();
  private timerPaused = false;
  private elapsedTime = 0;
  private intervalDuration = 1000;

  startTimer(): Observable<number> {
    this.timer$ = interval(this.intervalDuration);
    this.timer$.subscribe(() => {
      if (!this.timerPaused) {
        this.elapsedTime++;
      }
    });
    return this.timer$;
  }

  pauseTimer(): void {
    this.timerPaused = true;
    this.timerPaused$.next(true);
  }

  resumeTimer(): void {
    this.timerPaused = false;
    this.timerPaused$.next(false);
  }

  resetTimer(): void {
    this.elapsedTime = 0;
  }

  changeInterval(newInterval: number): void {
    this.intervalDuration = newInterval;
    // Restart timer with the new interval
    this.resetTimer();
    if (!this.timerPaused) {
      this.timer$.subscribe().unsubscribe();
      this.startTimer();
    }
  }

  getPausedStatus(): Observable<boolean> {
    return this.timerPaused$.asObservable();
  }

  getElapsedTime(): number {
    return this.elapsedTime;
  }
}

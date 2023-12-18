
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  startTimer(intervalTime: number): Observable<number> {
    return interval(intervalTime);
  }
}

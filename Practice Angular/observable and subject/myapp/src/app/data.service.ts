// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<number[]> {
    // Simulate fetching data asynchronously
    return of([1, 2, 3, 4, 5]);
  }
}

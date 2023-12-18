// observable.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observable',
  template: `
    <h2>Observable Example</h2>
    <button (click)="fetchData()">Fetch Data</button>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `
})
export class ObservableComponent implements OnInit {
  data: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch data when the component initializes
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(
      (result: number[]) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

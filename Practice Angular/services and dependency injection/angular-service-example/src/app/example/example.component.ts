// example.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  newData: string = '';
  savedData: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.savedData = this.dataService.getData();
  }

  addData(): void {
    if (this.newData.trim() !== '') {
      this.dataService.setData(this.newData);
      this.savedData = this.dataService.getData();
      this.newData = '';
    }
  }
}


// fruit-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fruit-list',
  template: `
    <h2>Fruits List</h2>
    <ul>
      <li *ngFor="let fruit of fruits">{{ fruit }}</li>
    </ul>
    <input type="text" #newFruit />
    <button (click)="addFruit(newFruit.value)">Add Fruit</button>
  `,
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fruits = this.dataService.getFruits();
  }

  addFruit(fruit: string): void {
    if (fruit.trim()) {
      this.dataService.addFruit(fruit.trim());
      this.fruits = this.dataService.getFruits(); // Update the list after adding
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];

  constructor() { }

  getFruits(): string[] {
    return this.fruits;
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);

  }
}

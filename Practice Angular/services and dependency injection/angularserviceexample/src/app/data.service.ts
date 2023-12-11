import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fruits: string[] = [];
  deleteData: any;

  constructor() { }

  getFruits(): string[] {
    return this.fruits;
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);

  }
  deleteFruit(index: number): void {
    if (index >= 0 && index < this.fruits.length) {
      this.fruits.splice(index, 1);
    }
  }

  deleteFruitByName(fruitName: string): void {
    const index = this.fruits.indexOf(fruitName);
    if (index !== -1) {
      this.fruits.splice(index, 1);
    }
}
}

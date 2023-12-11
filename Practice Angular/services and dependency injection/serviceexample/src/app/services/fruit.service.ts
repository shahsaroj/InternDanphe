// fruit.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: string[] = [];

  constructor() {}

  getFruits(): string[] {
    return this.fruits;
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }

  deleteFruit(index: number): void {
    this.fruits.splice(index, 1);
  }
}

// app.component.ts
import { Component } from '@angular/core';
import { FruitService } from './services/fruit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  newFruit: string = '';

  constructor(private fruitService: FruitService) {}

  addFruit(): void {
    if (this.newFruit.trim() !== '') {
      this.fruitService.addFruit(this.newFruit);
      this.newFruit = '';
    }
  }

  get fruits(): string[] {
    return this.fruitService.getFruits();
  }

  deleteFruit(index: number): void {
    this.fruitService.deleteFruit(index);
  }
}

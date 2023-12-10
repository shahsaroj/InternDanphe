// product.service.ts

import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private products: string[] = ['Food', 'Clothes', 'Jewellary'];

//   getProducts(): string[] {
//     return this.products;
//   }
// }

// product.service.ts

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): string[] {
    throw new Error('Method not implemented.');
  }
  private products: { category: string, name: string }[] = [
    { category: 'Electronics', name: 'Laptop' },
    { category: 'Electronics', name: 'Smartphone' },
    { category: 'Clothing', name: 'T-Shirt' },
    // Add more products and categories
  ];

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }

  getProductsByCategory(category: string): { category: string, name: string }[] {
    return this.products.filter(product => product.category === category);
  }
}

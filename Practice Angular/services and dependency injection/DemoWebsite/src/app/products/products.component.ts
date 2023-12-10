// products.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   products: string[] = [];

//   constructor(private productService: ProductService, private cartService: CartService) { }

//   ngOnInit(): void {
//     this.products = this.productService.getProducts();
//   }

//   addToCart(item: string): void {
//     this.cartService.addToCart(item);
//   }
// }

// products.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: string[] = [];
  searchKeyword: string = '';
assets: string | undefined;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(item: string): void {
    this.cartService.addToCart(item);
  }

  searchProducts(): void {
    // Implement search logic here (filter products based on searchKeyword)
    // Example: this.products = this.products.filter(product => product.toLowerCase().includes(this.searchKeyword.toLowerCase()));
  }
}


// products.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
// searchKeyword: any;
// addToCart(_t21: { toLowerCase(): any|string; category: string; name: string; }) {
// throw new Error('Method not implemented.');
// }
//   categories: string[] = [];
//   selectedCategory: string | undefined;
//   products: {
// toLowerCase(): any|string; category: string, name: string 
// }[] = [];

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.categories = this.productService.getCategories();
//   }

//   onCategorySelect(category: string): void {
//     this.selectedCategory = category;
//     this.products = this.productService.getProductsByCategory(category);
//   }
// }


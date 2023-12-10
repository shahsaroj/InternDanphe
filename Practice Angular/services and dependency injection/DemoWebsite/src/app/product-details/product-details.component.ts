// product-details.component.ts

import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedProduct: string | undefined;

  constructor(private cartService: CartService) { }

  addToCart(product: string): void {
    this.cartService.addToCart(product);
  }
}


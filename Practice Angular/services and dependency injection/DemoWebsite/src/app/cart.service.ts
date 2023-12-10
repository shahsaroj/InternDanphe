// cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  clearCart() {
    throw new Error('Method not implemented.');
  }
  removeFromCart(item: string) {
    throw new Error('Method not implemented.');
  }
  private cartItems: string[] = [];

  addToCart(item: string): void {
    this.cartItems.push(item);
  }

  getCartItems(): string[] {
    return this.cartItems;
  }
}

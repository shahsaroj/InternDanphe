// cart.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: string[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }
// }
// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; // Clear the displayed items in the cart
  }
  cartItems: string[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: string): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }
}

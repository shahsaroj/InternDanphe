import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }


  RemoveItem(index: number) {
  
    this.items.splice(index, 1);
    // this.cartService.items.splice(index, 1);

}
ClearCart() {
  this.cartService.items = []
  this.items = [];
}
btn5onclick() {
  window.history.back();
  // this.items=[];

}
   


}


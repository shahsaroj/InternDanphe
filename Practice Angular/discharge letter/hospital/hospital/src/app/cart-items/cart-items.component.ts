import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product';
import { CardComponent } from '../card/card.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product!: Product;
  namesOfDestinations:any=[];
  descriptions:any=[]
  prices:any=[];
  totalPrice:number=0;

  items:any=[];
  confirmPurchase:any=[];

constructor(public router: Router) { }

  ngOnInit(): void {
   
    // console.log(this.cart)
    // this.cartItems()
    this.getNames()
    this.getDescription()
    this.getPrice()
    this.getLocalStorageLength()
    this.getTotalPrice()
  }
onClickSubmit(data:any){
  this.router.navigate(['/confirmation'])
  this.confirmPurchase.push(data)
  console.log(this.confirmPurchase)
 }
}

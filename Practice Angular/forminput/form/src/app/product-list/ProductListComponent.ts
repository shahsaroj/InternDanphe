import { Component } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onclick() {
   alert('The product has been shared!');
  }
  btn1onclick() {
       alert('You will be notified soon!!!');
  }


}

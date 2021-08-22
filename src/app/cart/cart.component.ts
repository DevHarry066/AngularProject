import { Component, OnInit } from '@angular/core';
import cartData from 'src/Cart.json';

interface Cart
{
  imageUrl:string,
  productName:string,
  price:number,
  quantity:number,
  subTotal:number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title:any;
  constructor() { }

  ngOnInit(): void {
    this.title="Cart";
  }
  carts:Cart[]=cartData;

}

import { Component, OnInit } from '@angular/core';
import productData from 'src/ShopProducts.json';

interface Product
{
  imageUrl: string;
  rating: number;
  productName: string;
  price: number;
  discount: number;
  percen: number;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  title:any;
  constructor() { }

  ngOnInit(): void {
    this.title="Shop";
  }

  products:Product[]=productData;

}

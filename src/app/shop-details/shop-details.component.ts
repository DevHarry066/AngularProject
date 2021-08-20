// import { dealData } from 'src/DealOfTheDay.json';

import { Component, OnInit } from '@angular/core';

import prodData from 'src/ProductDetails.json';
import dealData from 'src/DealOfTheDay.json';
interface Product
{
  imageUrl:string,
    name:string,
    rating:number,
    price:number,
    discount:number,
    info:string,
    quantity:number,
    SKU:string,
    categories:string,
    tag:string,
    image2:string,
    image3:string,
    image4:string
}
interface Deal{
  imageUrl: string;
  rating: number;
  productName: string;
  price: number;
  discount: number;
  percen: number;
}


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  title:any;
  constructor() { }
  value:any;


  ngOnInit(): void {
    this.title="Arcade Dining Chair- With Arms";
    this.value=2;
  }

details:Product[]=prodData;
relates:Deal[]=dealData;

onDescription()
{
  this.value=1;
}

onInfo()
{
  this.value=2;
}
}

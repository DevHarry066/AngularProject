// import { dealData } from 'src/DealOfTheDay.json';

import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import prodData from 'src/ProductDetails.json';
import dealData from 'src/DealOfTheDay.json';
interface Product
{
  imageUrl:string,
  ProductName:string,
    rating:number,
    price:number,
    discount:number,
    info:string,
    quantity:number,
    SKU:string,
    categories:string,
    tag:string
    // image2:string,
    // image3:string,
    // image4:string
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
  constructor(private service:EcommerceService) {

    // this.refreshList();
   }
  value:any;
  index:any;


  ngOnInit(): void {
    this.title="Arcade Dining Chair- With Arms";
    this.value=2;
    this.index=2;
    this.refreshList();
  }

details:any;
relates:Deal[]=dealData;

onDescription()
{
  this.value=1;
}

   refreshList()
   {
    this.service.getProductDetails().subscribe(data => {
      this.details = data;
      console.log(this.details);
      this.detailsUpdater();
    });
   }

   detailsUpdater = () => {
      this.details.imageUrl = "https://localhost:44389"+this.details.imageUrl;
    }
    // console.log(this.details);

    onInfo()
    {
      this.value=2;
    }

  }




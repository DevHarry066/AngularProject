import { AddToCart } from './../add-to-cart';
// import { dealData } from 'src/DealOfTheDay.json';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import dealData from 'src/DealOfTheDay.json';


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
   }
  value!:number;
  index!:number;
  quantity!:number;
  cartId!:string;
  message=new AddToCart();



  ngOnInit(): void {
    this.title="Arcade Dining Chair- With Arms";
    this.value=2;
    this.index=2;
    this.refreshList();
    this.quantity=1;
  }

details:any;
relates:Deal[]=dealData;

onDescription()
{
  this.value=1;
}

   refreshList()
   {
    this.service.getProductDetailsById().subscribe(data => {
      this.details = data;
      // console.log(this.details);
      this.detailsUpdater();
    });
   }

   detailsUpdater = () => {
      this.details.imageUrl = "https://localhost:44389"+this.details.imageUrl;
    }

    onInfo()
    {
      this.value=2;
    }

    addToCart(id:any)
    {
      // console.log("add to cart product id "+id);
      // console.log("Quantity" +this.quantity);
      // console.log(this.cartId="FDE323");
      this.message.productId=id;
      this.message.quantity=this.quantity;
      this.message.cartId=this.cartId;
      this.addCartIntoDatabase();
      // console.log("Hello "+this.message.quantity);
    }

    addCartIntoDatabase()
    {
      this.service.addCart(this.message).subscribe(data=>{
      });
      alert("Added into cart");
    }


    }

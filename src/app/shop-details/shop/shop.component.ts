import { ShopDetailsComponent } from './../shop-details.component';
import { EcommerceService } from 'src/app/ecommerce.service';
import { Component, OnInit } from '@angular/core';
interface Product
{
  id:number,
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

  p:any;
  title:any;
  productId!:number;
  constructor( private service:EcommerceService) { }

  ngOnInit(): void {
    this.title="Shop";
    this.refreshProductList();
    }

  products!:Product[];

  refreshProductList(){
    this.service.getProductList().subscribe(data=>{
    this.products=data;
    this.productsUpdater();
    });
  }

  productsUpdater = () => {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].imageUrl="https://localhost:44389"+this.products[i].imageUrl;
    }
  }


  onSpecificProduct(data:number)
  {
    this.productId=data;
    console.log("Product Id is "+this.productId);

    this.service.setId(this.productId).subscribe(data=>{
      this.products=data;
      console.log("After Service "+ this.productId);
      // this.productsUpdater();
      });
  }

}

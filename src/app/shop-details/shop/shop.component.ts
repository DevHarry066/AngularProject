// import { Product } from './../product';
import { Product} from 'src/app/product';
import { ShopDetailsComponent } from './../shop-details.component';
import { EcommerceService } from 'src/app/ecommerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  p:any;
  title!:string;
  productId:any;
  pageSize!:number;
  constructor( private service:EcommerceService) { }

  ngOnInit(): void {
    this.title="Shop";
    this.pageSize=6;
    this.refreshProductList();
    }

  products!:Product[];
  prod!:number;

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
      this.prod=data;
      console.log("After Service "+ this.prod);
      });
  }

}

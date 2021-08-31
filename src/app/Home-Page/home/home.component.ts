import { Product } from './../../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/ecommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  cabss1!: Product[];
  deals!: Product[];
  sellers!: Product[];
  cat!: string;
  productId!: number;

  constructor(private router: Router, private service: EcommerceService) {
    this.cat = "cabinetery";
  }


  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.service.getDealOfDayList().subscribe(data => {
      this.deals = data;
      this.dealsUpdater();
    });

    this.service.getBestSellerList().subscribe(data => {
      this.sellers = data;
      this.sellersUpdater();
    });

    this.getCategoriesList();
  }




  getProductsByCategory(data: string) {
    this.cat = data;
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.service.getProductCategory(this.cat).subscribe(data => {
      this.cabss1 = data;
      this.cabsUpdater();
    });

  }

  onSpecificProduct(data: number) {
    this.productId = data;
    console.log("Product Id is " + this.productId);

    this.service.setId(this.productId).subscribe(data => {
      this.productId = data;
      console.log("After Service " + this.productId);
      // this.productsUpdater();
    });
  }


  onHome() {
    this.router.navigate(['/home']);
  }

  onContact() {
    this.router.navigate(['/contact']);
  }

  onAbout() {
    this.router.navigate(['/about']);
  }



  dealsUpdater = () => {
    for (let i = 0; i < this.deals.length; i++) {
      this.deals[i].imageUrl = "https://localhost:44389" + this.deals[i].imageUrl;
    }
  }

  sellersUpdater = () => {
    for (let i = 0; i < this.sellers.length; i++) {
      this.sellers[i].imageUrl = "https://localhost:44389" + this.sellers[i].imageUrl;
    }
  }

  cabsUpdater = () => {
    for (let i = 0; i < this.sellers.length; i++) {
      this.cabss1[i].imageUrl = "https://localhost:44389" + this.cabss1[i].imageUrl
    }
  }
}

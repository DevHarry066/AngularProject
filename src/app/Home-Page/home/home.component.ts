import { Input,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/ecommerce.service';
import cabData from 'src/Cabinetery.json';
import diningData from 'src/Dining.json';
import dealData from 'src/DealOfTheDay.json';
import sellerData from 'src/BestSellerItems.json';
interface Cabinetery{
  imageUrl: string;
  rating: number;
  productName: string;
  price: number;
  discount: number;
  percen: number;
}

interface Deal{
  imageUrl: string;
  rating: number;
  productName: string;
  price: number;
  discount: number;
  percentage: number;
}


interface Deal1{
  imageUrl: string;
  rating: number;
  productName: string;
  price: number;
  discount: number;
  percen: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  cabss1:Cabinetery[]=cabData;
  dinss:Cabinetery[]=diningData;
  deals!:Deal[];
  sellers:Deal1[]=sellerData;

  constructor(private router:Router, private service:EcommerceService) {
}


  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getDealOfDayList().subscribe(data=>{
    this.deals=data;
    this.dealsUpdater();
    });

  }

   dealsUpdater = () => {
    for (let i = 0; i < this.deals.length; i++) {
      this.deals[i].imageUrl="https://localhost:44389"+ this.deals[i].imageUrl;
    }
  }

  onHome()
  {
    this.router.navigate(['/home']);
  }

  onContact()
  {
    this.router.navigate(['/contact']);
  }

  onAbout()
  {
    this.router.navigate(['/about']);
  }



 cabinetery()
  {
    this.cabss1=cabData;
  }

  diningSet()
  {
    this.cabss1=this.dinss;
  }
}

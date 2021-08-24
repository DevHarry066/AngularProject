import { Input,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  deals:Deal[]=dealData;
  sellers:Deal[]=sellerData;

  constructor(private router:Router) {
}


  ngOnInit(): void {


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

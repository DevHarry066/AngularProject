import { Employee } from 'src/app/employee.model';
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
  // cabss:Cabinetery={
  // imageUrl: "",
  // rating: 0,
  // productName:" ",
  // price: 0,
  // discount: 0,
  // percen: 0
  // };

  cabss1:Cabinetery[]=cabData;
  // cabss=cabData;
  dinss:Cabinetery[]=diningData;
  deals:Deal[]=dealData;
  sellers:Deal[]=sellerData;

  constructor(private router:Router) {
    // this.name="Kivaha 4-Seater Coffee Table Set";
  //   this.image1=mydata.products['Cabinetery'][0].imageUrl;
  //  console.log("Image URL from json "+this.image1);
}


  ngOnInit(): void {
    // this.image="http://wordpress.templatemela.com/woo/WCM04/WCM040094/WP5/wp-content/uploads/2019/04/6-368x383.jpg";
    // this.name="Kivaha 4-Seater Coffee Table Set";
    // this.price=30.00;
    // this.rating=3;
    // console.log(this.cabss);

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

    // // console.log("cabss");
    // this.image="http://wordpress.templatemela.com/woo/WCM04/WCM040094/WP5/wp-content/uploads/2019/04/6-368x383.jpg";
    // this.name="Kivaha 4-Seater Coffee Table Set";
    // this.price=30.00;
    // this.rating=3;
  }

  diningSet()
  {
    this.cabss1=this.dinss;
    // this.image="http://wordpress.templatemela.com/woo/WCM04/WCM040094/WP5/wp-content/uploads/2019/04/3-368x383.jpg";
    // this.name="Combos with Hagen Lounge Chair";
    // this.price=98.00
  }
}

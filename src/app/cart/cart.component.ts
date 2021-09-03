import { EcommerceService } from './../ecommerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title:any;
  constructor(private service:EcommerceService) { }

  ngOnInit(): void {
    this.title="Cart";
    this.refreshCartList();
  }
  carts:any;


  refreshCartList()
  {
    this.service.getCartList().subscribe(data=>{
      this.carts=data;
      this.cartsUpdater()
    });
  }

    cartsUpdater = () => {
      for (let i = 0; i < this.carts.length; i++) {
        this.carts[i].imageUrl = "https://localhost:44389" + this.carts[i].imageUrl;
        this.carts[i].subTotal = this.carts[i].price * this.carts[i].quantity;
      }
    }

    onDelete(id:number)
    {
      console.log("deleting cart id "+id);
      this.service.deleteCartItem(id).subscribe(()=>{
        window.location.reload();
      });
      alert("Removed from cart");
      window.location.reload();
    }
  }



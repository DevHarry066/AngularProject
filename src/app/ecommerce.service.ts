import { AddToCart } from './add-to-cart';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private url: string;
  private productId:any;

 private API_URL= environment.API_URL;

  constructor(private http:HttpClient) {
    this.setId(2);
    this.url=this.API_URL;
  }


  setId(data:any):Observable<any>
  {
    this.productId=data;
   console.log("set product Id as "+ this.productId);
    return this.productId;
  }

  getDealOfDayList(): Observable<Product[]> {
    return this.http.get<Product[]> (this.url+'/api/DealBestSeller');
}

getBestSellerList(): Observable<Product[]> {
  return this.http.get<Product[]> (this.url+'/api/BestSellerItems/GetBestSellerDeal');
}

getProductList(): Observable<Product[]> {
  return this.http.get<Product[]> (this.url+'/api/Products');
}

getProductDetailsById(): Observable<Product> {
  return this.http.get<Product> (this.url+'/api/Products/'+this.productId);
}

getProductCategory(data:string): Observable<Product[]> {
  return this.http.get<Product[]>(this.url+'/api/Categories/FindEmployee?category='+data);
}

getCartList():Observable<any>
{
  return this.http.get<any>(this.url+'/api/ShoppingCart');
}

deleteCartItem(data:any)
{
  console.log("id in method of service" +data)
  return this.http.delete(this.url+'/api/ShoppingCart/'+data);
}

addCart(postData:AddToCart):Observable<string>
{
  return this.http.post<string>(this.url+"/api/ShoppingCart",postData);
}

}

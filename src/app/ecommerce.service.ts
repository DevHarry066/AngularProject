import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from '../environments/environment';

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


  setId(data:number):Observable<any>
  {
    this.productId=data;
    // return this.productId;
   console.log("set product Id as "+ this.productId);

    return this.productId;
  }

  getId()
  {
    return this.productId;
  }




  getDealOfDayList(): Observable<any> {
    return this.http.get<any> (this.url+'/api/DealBestSeller');
}

getBestSellerList(): Observable<any> {
  return this.http.get<any> (this.url+'/api/DealBestSeller/GetBestSeller');
}

getProductList(): Observable<any> {
  return this.http.get<any> (this.url+'/api/Products');
}

getProductDetails(): Observable<any> {
  return this.http.get<any> (this.url+'/api/Products/'+this.productId);
}


getProductCategory(data:any): Observable<any> {
  return this.http.get<any>(this.url+'/api/Categories/FindEmployee?category='+data);
}


}

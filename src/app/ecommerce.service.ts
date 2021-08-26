import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private url: string;

 private API_URL= environment.API_URL;

  constructor(private http:HttpClient) {
    this.url=this.API_URL;
  }

  getDealOfDayList(): Observable<any> {
    return this.http.get<any> (this.url+'/api/DealBestSeller');
}
}

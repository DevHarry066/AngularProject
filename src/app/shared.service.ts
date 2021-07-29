import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 private url: string;

 private API_URL= environment.API_URL;
 private tokenData=new BehaviorSubject<string>("");
 formData: Employee=new Employee();
  list !: Employee[];

  constructor(private http:HttpClient) {
    this.url=this.API_URL;
  }


  loadToken(data:any)
  {
    this.tokenData.next(data);
    console.log("In service loadToken "+this.tokenData.value);

  }

  getEmpList(): Observable<Employee[]> {
    console.log("Get emp list "+this.tokenData.value);
    let httpOptions = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.tokenData.value);
    return this.http.get<Employee[]> (this.url+'/api/Employee', { headers: httpOptions });
}

  addEmployee(val:any){

    let httpOptions = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.tokenData.value);

    return this.http.post(this.url+'/api/Employee',val,{headers:httpOptions});
  }

  updateEmployee(val:any){
    let httpOptions = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.tokenData.value);

    return this.http.put(this.url+'/api/Employee',val,{headers:httpOptions});
  }

  deleteEmployee(val:any){
    let httpOptions = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.tokenData.value);
    return this.http.delete(this.url+'/api/Employee/'+val,{headers:httpOptions});
  }


  addUser(val:any){

    return this.http.post(this.url+'/Register',val);
  }

  loginUser(val:any):Observable<any>{
    return this.http.get<any[]>(this.url+'/Login?email='+val.email+'&password='+val.password);
  }

}

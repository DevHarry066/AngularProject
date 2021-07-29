import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, public service:SharedService) { }

  ngOnInit(): void {


  }
  loginForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
    });

Data:any;
public token!:string;

  get l(){
    return this.loginForm.controls;
  }

  saveLoginForm(){
    console.log('Form data is ', this.loginForm.value);
    this.Data=this.loginForm.value;
    console.log(this.Data);
    this.getData();

    this.service.loginUser(this.Data).subscribe(res=>{
      //alert(res.toString()
      this.token=(res.toString()
      );
      alert(this.token);
      console.log("HIi");
      console.log("Token getting from API "+this.token);
      this.service.loadToken(this.token);
  });

    setTimeout(() => {
      console.log("Token after timeout "+this.token); }, 2000);
  }

getData()
{
  console.log(this.Data);
}
}

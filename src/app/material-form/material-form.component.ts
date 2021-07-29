import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent{

  constructor(private formBuilder:FormBuilder, public service:SharedService){

  }



  profileForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    role:['',Validators.required],
   });

Data:any;
    get f(){
    return this.profileForm.controls;
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    this.Data=this.profileForm.value;
    console.log(this.Data);
    this.getData();

    this.service.addUser(this.Data).subscribe(res=>{
      alert(res.toString());
    });
    }

getData()
{

  console.log(this.Data);
}
}


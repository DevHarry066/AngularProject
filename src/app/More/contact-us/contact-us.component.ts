import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, public service:SharedService) { }

  ngOnInit(): void {
  }

  Data:any;

  profileForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    subject:['',Validators.required],
    message:['',Validators.required],
   });

   saveForm(){
    console.log('Form data is ', this.profileForm.value);
    this.Data=this.profileForm.value;
    console.log("Hello from this data "+this.Data);
    this.getData();

    this.service.addUserMessage(this.Data).subscribe(res=>{
       alert(res.toString());
     });
    }

getData()
{

  console.log(this.Data);
}

  sendDetails()
  {
    console.log("Hii from Send Details");

  }
}

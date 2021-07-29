import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/employee.model';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(public service:SharedService) { }

  @Input() emp:any;
  EmployeeId: any;
  EmployeeName:any;
  Department:any;
  DateOfJoining:any;

  ngOnInit(): void {
  }


  addTodo(id:any,name:any,dep:any,dateJoin:any)
  {

   this.EmployeeName=name;
   this.Department=dep;
   this.DateOfJoining=dateJoin;
   this.addEmployee();
  }

addEmployee(){
  var val = {
              EmployeeId:this.EmployeeId,
              EmployeeName:this.EmployeeName,
              Department:this.Department,
               DateOfJoining:this.DateOfJoining,
          };

  this.service.addEmployee(val).subscribe(res=>{
    alert(res.toString());
  });
}


  updateTodo(id:any,name:any,dep:any,dateJoin:any)
  {
    this.EmployeeId=id;
    this.EmployeeName=name;
    this.Department=dep;
    this.DateOfJoining=dateJoin;
    this.updateEmployee()
  }


  updateEmployee(){
    var val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining
    };

  this.service.updateEmployee(val).subscribe(res=>{
  alert(res.toString());
  });
}
}

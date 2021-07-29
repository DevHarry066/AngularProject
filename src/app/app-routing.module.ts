import { LogInComponent } from './log-in/log-in.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
 {path:'material-form',component:MaterialFormComponent},
 {path:'log-in',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

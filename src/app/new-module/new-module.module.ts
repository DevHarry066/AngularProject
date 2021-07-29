import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewModuleModule { }

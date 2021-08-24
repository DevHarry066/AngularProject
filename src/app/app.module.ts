import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialFormComponent } from './material-form/material-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/Input';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LogInComponent } from './log-in/log-in.component';
import { LoginComponent } from './Home-Page/login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { FooterComponent } from './footer/footer.component';
import { SqrtPipe } from './SqrtPipe.components';
import { HomeComponent } from './Home-Page/home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ContactUsComponent } from './More/contact-us/contact-us.component';
import { AboutUsComponent } from './More/about-us/about-us.component';
import { StarRatingModule } from 'angular-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './menubar/menubar.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopComponent } from './shop-details/shop/shop.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    MaterialFormComponent,
    LogInComponent,
    LoginComponent,
    LoginHeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    MenubarComponent,
    ShopDetailsComponent,
    ShopComponent,
    CartComponent,
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    NgxPaginationModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    StarRatingModule,
    MatNativeDateModule,
    NgbModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CartComponent } from './cart/cart.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { AboutUsComponent } from './More/about-us/about-us.component';
import { ContactUsComponent } from './More/contact-us/contact-us.component';
import { LoginComponent } from './Home-Page/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home-Page/home/home.component';
import { ShopComponent } from './shop-details/shop/shop.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path:'shop',component:ShopComponent},
{path:'contact', component:ContactUsComponent},
{path:'about',component:AboutUsComponent},
{path:'shopDetails',component:ShopDetailsComponent},
{path:'cart',component:CartComponent},
{path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

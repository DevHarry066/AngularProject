import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router:Router) { }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
  ngOnInit(): void {
  }
  onHome()
  {
    this.router.navigate(['/home']);
  }
  onShop()
  {
    this.router.navigate(['/shop']);
  }

  onContact()
  {
    this.router.navigate(['/contact']);
  }

  onAbout()
  {
    this.router.navigate(['/about']);
  }

  onDetails()
  {
    this.router.navigate(['/shopDetails']);
  }

  onCart()
  {
    this.router.navigate(['/cart']);
  }




}

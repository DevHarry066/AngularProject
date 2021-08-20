import { Component, OnInit } from '@angular/core';
import megnorData from 'src/MegnorHistory.json';
import teamData from 'src/TeamMember.json';

interface Megnor
{
  icon:string,
  heading:string,
  content:string
}

interface Team
{
  image:string,
  name:string,
  role:string,
  info:string,
  icon1:string,
  icon2:string,
  icon3:string,
  icon4:string,
  icon5:string,
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  megss:Megnor[]=megnorData;
  teams:Team[]=teamData;
}



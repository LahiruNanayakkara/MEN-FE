import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
})
export class ViewProfileComponent implements OnInit {
  firstname:string="";
  dropdownItems = [
    {
      text:"My Account",
      icon:"person_outline"
    },
    {
      text:"Settings",
      icon:"tune"
    },
    {
      text:"Logout",
      icon:"logout"
    }
  ]

  ngOnInit(): void {
    this.firstname = "Lahiru";
  }

}

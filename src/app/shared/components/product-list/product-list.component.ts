import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {

  products!: Product[];

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
    this.products = [
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      },
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      },
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      },
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      },
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      },
      {
        id:0,
        name:"Comfort Fit Crew Neck T-shirt",
        description:"",
        category:"T-Shirts",
        imageUrl:"../../../../assets/shirts.jpg",
        price:3.33,
        stock:10
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private productService:ProductService) {}

  dropdownItems = [
    {
      text: 'My Account',
      icon: 'person_outline',
    },
    {
      text: 'Settings',
      icon: 'tune',
    },
    {
      text: 'Logout',
      icon: 'logout',
    },
  ];

  ngOnInit(): void {
    this.products = this.productService.products.slice(0,6)
  }
}

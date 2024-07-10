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
    this.products = [
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },
      {
        "id": 1,
        "name": "Men's Casual Shirt",
        "description": "A comfortable and stylish casual shirt for men.",
        "price": 29.99,
        "category": "Men",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "Blue", "Green"],
        "brand": "BrandName",
        "material": "Cotton",
        "stockQuantity": 100,
        "images": [
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1",
          "https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2"
        ]
      },

    ];
  }
}

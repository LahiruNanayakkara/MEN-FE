import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      description: 'A comfortable and stylish casual shirt for men.',
      price: 29.99,
      category: 'Shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Blue', 'Green'],
      brand: 'BrandName',
      material: 'Cotton',
      stockQuantity: 100,
      images: [
        'https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+1',
        'https://via.placeholder.com/300x400.png?text=Men%27s+Casual+Shirt+2',
      ]
    },
    {
      id: 4,
      name: "Men's Formal Trousers",
      description: 'Elegant and comfortable formal trousers for office wear.',
      price: 39.99,
      category: 'Trousers',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      brand: 'SuitMaster',
      material: 'Polyester',
      stockQuantity: 60,
      images: [
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+1',
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+2',
      ]
    },
    {
      id: 2,
      name: "Men's Formal Shirt",
      description: 'A sleek and professional formal shirt for office wear.',
      price: 39.99,
      category: 'Shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Blue'],
      brand: 'SuitMaster',
      material: 'Polyester',
      stockQuantity: 75,
      images: [
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Shirt+1',
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Shirt+2',
      ]
    },
    {
      id: 3,
      name: "Men's Casual Trousers",
      description: 'Elegant and comfortable formal trousers for office wear.',
      price: 39.99,
      category: 'Trousers',
      sizes: ['30', '32', '34', '36'],
      colors: ['Black', 'Navy', 'Gray'],
      brand: 'SuitMaster',
      material: 'Polyester',
      stockQuantity: 60,
      images: [
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+1',
        'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+2',
      ]
    },
  ];
}

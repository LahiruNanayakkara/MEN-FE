import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss',
})
export class CategorySectionComponent implements OnInit {
  @Input('category') category!: string;
  productsByCategory?: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productsByCategory = this.getProductsByCategory(this.category);
  }

  private getProductsByCategory(category: string) {
    return this.productService.products.filter((product) => {
      return product.category.toLowerCase() === category.toLowerCase();
    });
  }
}

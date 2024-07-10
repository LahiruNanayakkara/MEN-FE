import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { fade, zoomOut } from '../../../animations';

@Component({
  selector: 'app-single-category-page',
  templateUrl: './single-category-page.component.html',
  styleUrl: './single-category-page.component.scss',
  animations: [zoomOut, fade],
})
export class SingleCategoryPageComponent implements OnInit {
  category!: string | null;
  productsByCategory?: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category) {
        this.productsByCategory = this.getProductsByCategory(this.category);
        if (this.productsByCategory.length == 0) {
          this.router.navigate(['/404']);
        }
      }
    });
  }

  getProductsByCategory(category: string) {
    return this.productService.products.filter((product) => {
      return product.category.toLowerCase() === category.toLowerCase();
    });
  }
}

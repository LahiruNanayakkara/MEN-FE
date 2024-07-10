import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent implements OnInit {
  products?: Product[];
  searchText?: string | null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.searchText = params.get('input');
      this.products = this.getResult();
    });
  }

  getResult() {
    if (!this.searchText) {
      return [];
    } else {
      return this.productService.products.filter((product) =>
        product.category.toLowerCase().includes(this.searchText!.toLowerCase())
      );
    }
  }
}

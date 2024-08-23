import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../pages/components/products/products.component';
import { FormBuilder } from '@angular/forms';
import { categoryWithCount } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  @Input('categories') categories?: Category[];
  keys: string[] = [];
  categoriesWithCount: categoryWithCount[] = [];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories!.forEach((item) => {
      this.keys.push(item.name);
    });
    console.log(this.keys);
    this.categoriesWithCount =
      this.productService.getProductByCategoryWithCount();
    console.log(this.categoriesWithCount);
  }

  readonly toppings = this._formBuilder.group({});
}

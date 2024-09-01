import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilterByCategory',
})
export class ProductFilterByCategoryPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (category == null || category == '') {
      return products;
    }

    return products.filter((product) => (product.category == category));
  }
}

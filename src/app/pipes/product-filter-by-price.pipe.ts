import { Pipe, PipeTransform } from '@angular/core';
import { priceRange, Product } from '../models/product';

@Pipe({
  name: 'productFilterByPrice'
})
export class ProductFilterByPricePipe implements PipeTransform {

  transform(products: Product[], priceRange: priceRange): Product[] {
    if (priceRange == null) {
      return products;
    }

    return products.filter((product) => (product.price >= priceRange.min && product.price <= priceRange.max));
  }

}

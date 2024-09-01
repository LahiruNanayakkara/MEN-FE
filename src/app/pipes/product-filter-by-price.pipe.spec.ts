import { ProductFilterByPricePipe } from './product-filter-by-price.pipe';

describe('ProductFilterByPricePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterByPricePipe();
    expect(pipe).toBeTruthy();
  });
});

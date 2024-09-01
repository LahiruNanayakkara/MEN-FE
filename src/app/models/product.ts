export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[]; // e.g., ['S', 'M', 'L', 'XL']
  colors: string[]; // e.g., ['Red', 'Blue', 'Green']
  brand: string;
  material: string;
  stockQuantity: number;
  images: itemImage[]; // URLs to product images
}

export interface itemImage {
  color:string;
  code:string;
  imageUrl: string;
}


export class categoryWithCount {
  name:string;
  count:number;

  constructor(name:string) {
    this.name = name;
    this.count = 0;
  }
}

export interface priceRange {
  min:number;
  max:number;
}

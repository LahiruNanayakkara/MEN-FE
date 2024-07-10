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
  images: string[]; // URLs to product images
}

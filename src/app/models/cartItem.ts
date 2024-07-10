export interface CartItem {
  productId: number;
  name: string;
  price: number;
  size?: string;
  color?: string;
  quantity: number;
}

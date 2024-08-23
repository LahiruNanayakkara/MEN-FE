import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}

  wishlist: CartItem[] = [];
  wishlistSubject = new BehaviorSubject<CartItem[]>([]);

  getWishList() {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(item: CartItem) {
    item.quantity = 1;
    const existingItem = this.wishlist.find(
      (i) =>
        i.productId === item.productId &&
        i.size === item.size &&
        i.color === item.color
    );
    if (!existingItem) {
      this.wishlist.push(item);
    }
    this.wishlistSubject.next(this.wishlist);
  }

  isExistInWishlist(item: CartItem) {
    const existingItem = this.wishlist.findIndex(
      (i) =>
        i.productId === item.productId &&
        i.color === item.color &&
        i.size === item.size
    );
    if (existingItem == -1) {
      return false;
    }
    return true;
  }

  removeFromWishlist(productId: number, size?: string, color?: string) {
    this.wishlist = this.wishlist.filter(
      (item) =>
        item.productId !== productId ||
        item.size !== size ||
        item.color !== color
    );
    this.wishlistSubject.next(this.wishlist);
  }

  clearWishlist() {
    this.wishlist = [];
    this.wishlistSubject.next(this.wishlist);
  }
}

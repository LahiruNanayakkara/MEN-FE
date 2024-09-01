import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCartItemComponent } from '../../../popups/delete-cart-item/delete-cart-item.component';
import { MoveToWishlistComponent } from '../../../popups/move-to-wishlist/move-to-wishlist.component';
import { WishlistService } from '../../../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit {
  @Input('item') item!: any;
  product?: Product;
  qtySelected: number = 0;
  imgUrl:string = "";

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private dialog: MatDialog,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.product = this.productService.products.find((i) => {
      return i.id == this.item.productId;
    });
    this.qtySelected = this.item.quantity;
    this.getImgUrl(this.product);
    console.log(this.imgUrl);
  }

  onRemoveFromCart(item: any) {
    this.cartService.removeFromCart(item.productId, item.size, item.color);
  }

  onSelectedQtyDecrease() {
    if (this.qtySelected - 1 > 0) {
      this.qtySelected--;
      this.item.quantity = this.qtySelected;
      this.cartService.updateCartItem(this.item);
    }
  }

  onSelectedQtyIncrease() {
    if (this.qtySelected + 1 <= this.product!.stockQuantity) {
      this.qtySelected++;
      this.item.quantity = this.qtySelected;
      this.cartService.updateCartItem(this.item);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteCartItemComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onRemoveFromCart(this.item);
      }
    });
  }

  onMoveToWishlist() {
    const dialogRef = this.dialog.open(MoveToWishlistComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wishlistService.addToWishlist(this.item);
        this.onRemoveFromCart(this.item);
      }
    });
  }

  onNavigate() {
    this.router.navigate(['/shop', this.product?.category.toLowerCase(), this.product?.id])
  }

  getImgUrl(product?:Product) {
    if (product == undefined) {
      return;
    }
    product.images.forEach((val) => {
      if (val.color == this.item.color.toLowerCase()) {
        this.imgUrl = val.imageUrl;
      }
    })
  }
}

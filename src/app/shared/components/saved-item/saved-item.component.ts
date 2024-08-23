import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { WishlistService } from '../../../services/wishlist.service';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteSavedItemComponent } from '../../../popups/delete-saved-item/delete-saved-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-item',
  templateUrl: './saved-item.component.html',
  styleUrl: './saved-item.component.scss',
})
export class SavedItemComponent implements OnInit {
  @Input('item') item!: CartItem;
  product?: Product;
  imgUrl: string = "";

  constructor(
    private router: Router,
    private wishlistService: WishlistService,
    private cartService: CartService,
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.product = this.productService.products.find(
      (i) => i.id == this.item.productId
    );
    this.getImgUrl(this.product);
  }

  openRemoveDialog() {
    const dialogRef = this.dialog.open(DeleteSavedItemComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.wishlistService.removeFromWishlist(this.item.productId, this.item.size, this.item.color)
      }
    })
  }

  onMovetoCart() {
    this.cartService.addToCart(this.item);
    this.wishlistService.removeFromWishlist(this.item.productId, this.item.size, this.item.color);
  }

  onNavigate() {
    this.router.navigate(['/shop', this.product?.category.toLowerCase(), this.product?.id])
  }

  getImgUrl(product?:Product) {
    if (product == undefined) {
      return;
    }
    product.images.forEach((val) => {
      if (val.color == this.item.color) {
        this.imgUrl = val.imageUrl;
      }
    })
  }
}

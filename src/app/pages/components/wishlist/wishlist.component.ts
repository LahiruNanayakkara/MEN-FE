import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { WishlistService } from '../../../services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { ClearWishlistComponent } from '../../../popups/clear-wishlist/clear-wishlist.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  wishlist: CartItem[] = [];

  constructor(
    private wishlistService: WishlistService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.wishlistService.getWishList().subscribe((res) => {
      this.wishlist = res;
    });
  }

  onClearWishlist() {
    const dialogRef = this.dialog.open(ClearWishlistComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.wishlistService.clearWishlist();
      }
    });
  }
}

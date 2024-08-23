import { Component, HostListener, OnInit } from '@angular/core';
import { fadeIn, slideIn } from '../../../animations';
import { CartService } from '../../../services/cart.service';
import { WishlistService } from '../../../services/wishlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideIn, fadeIn],
})
export class HeaderComponent implements OnInit {
  isHidden: boolean = false;
  isCategoriesVisible = true;
  previousScrollPosition: number = window.pageYOffset;
  totalItemsInCart: number = 0;
  totalItemsInWishlist: number = 1;

  categories = [
    'Shrits & T-shirts',
    'Pants',
    'Hoodies',
    'Innerwear',
    'Perfumes',
    'Watches',
    'Caps',
    'Shoes',
    'Shorts',
    'Coats',
  ];

  moreItems: string[];

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScrollPosition = window.pageYOffset;

  //   if(currentScrollPosition > 200 && this.previousScrollPosition < currentScrollPosition){
  //     this.isCategoriesVisible = false;
  //   } else {
  //     this.isCategoriesVisible = true;
  //   }

  //   this.previousScrollPosition = currentScrollPosition;
  // }

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private activatedRoute:ActivatedRoute
  ) {
    this.moreItems = [];
  }

  ngOnInit(): void {

    // this.activatedRoute.queryParamMap.subscribe(params => {
    //   const hidden = params.get('nh');
    //   if (hidden=="true") {
    //     this.isHidden = true;
    //   } else {
    //     this.isHidden = false;
    //   }
    // })

    this.moreItems = this.categories.splice(8);

    this.cartService.getProducts().subscribe((res) => {
      this.totalItemsInCart = res.length;
    });

    this.wishlistService.getWishList().subscribe((res) => {
      this.totalItemsInWishlist = res.length;
      console.log(this.totalItemsInWishlist);
    });
  }
}

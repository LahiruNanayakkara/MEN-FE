import { Component, HostListener, OnInit } from '@angular/core';
import { fadeIn, slideIn } from '../../../animations';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideIn, fadeIn]
})
export class HeaderComponent implements OnInit {

  isCategoriesVisible = true;
  previousScrollPosition: number = window.pageYOffset;
  totalItemsInCart:number = 0;

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

  moreItems:string[];


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if(currentScrollPosition > 200 && this.previousScrollPosition < currentScrollPosition){
      this.isCategoriesVisible = false;
    } else {
      this.isCategoriesVisible = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }


  constructor(private cartService:CartService) {
    this.moreItems = []
  }

  ngOnInit(): void {
    this.moreItems= this.categories.splice(8);

    this.cartService.getProducts().subscribe((res) => {
      this.totalItemsInCart = res.length;
    })
  }

}

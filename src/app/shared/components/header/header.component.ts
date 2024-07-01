import { Component, HostListener, OnInit } from '@angular/core';
import { fadeIn, slideIn } from '../../../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideIn, fadeIn]
})
export class HeaderComponent implements OnInit {

  isCategoriesVisible = true;
  previousScrollPosition: number = window.pageYOffset;

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
      console.log(currentScrollPosition);
    } else {
      this.isCategoriesVisible = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }


  constructor() {
    this.moreItems = []
  }

  ngOnInit(): void {
    this.moreItems= this.categories.splice(8);
  }

}

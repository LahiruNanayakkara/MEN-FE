import { Component, HostListener } from '@angular/core';
import { fade, zoomOut } from '../../../animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [zoomOut, fade]
})
export class ProductsComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scale = 1 + scrollPosition / 1000; // Adjust the divisor to control the zoom speed
    const image = document.querySelector('.men-banner-img') as HTMLElement;
    if (image) {
      image.style.transform = `scale(${scale})`;
    }
  }

}

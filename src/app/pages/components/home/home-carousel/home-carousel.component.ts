import { Component, HostListener } from '@angular/core';
import { fade, zoomOut } from '../../../../animations';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
  animations: [fade, zoomOut]
})
export class HomeCarouselComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scale = 1 + scrollPosition / 1000; // Adjust the divisor to control the zoom speed
    const image = document.querySelector('.men-hero-img') as HTMLElement;
    if (image) {
      image.style.transform = `scale(${scale})`;
    }
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
  animations: []
})
export class CategoryCardComponent {
  @Input('title') title!:string;
  @Input('bgImage') bgImage!:string;
}

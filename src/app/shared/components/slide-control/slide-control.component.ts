import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slide-control',
  templateUrl: './slide-control.component.html',
  styleUrl: './slide-control.component.scss',
})
export class SlideControlComponent {
  @Input('slideWidth') slideWidth!: number;
  @Input('totalSlides') totalSlides!: number;
  @Input('viewSlides') viewSlides!: number;

  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();

  onLeft() {
    this.left.emit();
  }

  onRight() {
    this.right.emit();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-badge',
  templateUrl: './header-badge.component.html',
  styleUrl: './header-badge.component.scss'
})
export class HeaderBadgeComponent {

  @Input("label") label:number = 0;
  @Input("text") text!:string;
  @Input("icon") icon!:string;

}

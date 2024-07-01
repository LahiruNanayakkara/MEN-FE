import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrl: './value-card.component.scss'
})
export class ValueCardComponent {

  @Input('icon') icon!:string;
}

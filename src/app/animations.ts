import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { transform } from 'typescript';

export const fade = trigger('fade', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(20%)',
    }),
  ),
  transition(':enter, :leave', [animate('1s 0.4s ease-in-out')]),
]);

export const zoomOut = trigger('zoomOut', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'scale(2)',
    })
  ),
  transition(':enter, :leave', [animate('1s 0.4s ease-in-out')]),
]);

export const slideIn = trigger('slideIn', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(-100%)',
    })
  ),
  transition(':enter, :leave', [animate('0.4s 0.2s ease-in-out')]),
]);


export const fadeIn = trigger('fadeIn', [
  state('void', style({
    opacity:0,
    transform:'translateY(10%)'
  })),
  transition(':enter, :leave', animate('0.5s ease-in'))
]);

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
    })
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
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(10%)',
    })
  ),
  transition(':enter, :leave', animate('0.5s ease-in')),
]);

export const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateY(0%)',
    })
  ),
  state(
    'out',
    style({
      opacity: 0,
      transform: 'translateY(30%)',
    })
  ),
  transition('out => in', animate('0.5s linear')),
  transition('in => out', animate('0.5s linear')),
]);

export const collapseble = trigger('collapseble', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(-100%)',
    })
  ),
  transition(':enter, :leave', animate('0.5s ease-out')),
]);

export const moveIn = trigger('moveIn', [
  transition('*<=>*', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(50%)',
        }),
        stagger(100, [
          animate(
            '250ms ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ]),
      ],
      { optional: true }
    ),
    // query(
    //   ':leave',
    //   [
    //     style({
    //       opacity: 1,
    //       transform: 'translateY(0%)',
    //     }),
    //     stagger(100, [
    //       animate(
    //         '250ms ease-out',
    //         style({
    //           opacity: 0,
    //           transform: 'translateY(50%)',
    //         })
    //       ),
    //     ]),
    //   ],
    //   { optional: true }
    // ),
  ]),
]);

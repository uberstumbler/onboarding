import { animate, style, transition, trigger } from '@angular/animations';

const speed = '0.3s';
const easing = ' cubic-bezier(0.77, 0, 0.175, 1)';

export const fadeIn = trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate(speed + easing, style({ opacity: 1 }))])]);

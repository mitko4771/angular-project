import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes   
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('resizeSection', [
      state('smaller', style({
        height: '69px',
        left: '0',
        width: '100%',
      })),
      transition('* => smaller', animate('900ms ease-in'))
    ]),
    trigger('hideImg', [
      state('hide', style({
        display: 'none'
      })),
      transition('* => hide', animate('600ms ease-in'))
    ]),
    trigger('hideButton', [
      state('hide', style({
        display: 'none'
      })),
      transition('* => hide', animate('400ms ease-in'))
    ]),
    trigger('hideHr', [
      state('hide', style({
        display: 'none'
      })),
      transition('* => hide', animate('800ms ease-in'))
    ]),
    trigger('showLinks', [
      state('show', style({
        display: 'inline-block'
      })),
      transition('* => show', animate('900ms ease-in'))
    ]),
    trigger('showLogo', [
      state('show', style({
        display: 'inline-block'
      })),
      transition('* => show', animate('900ms ease-in'))
    ]),
    trigger('showArticle', [
      state('show', style({
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      })),
      transition('* => show', animate('900ms ease-in'))
    ])
  ]
})

export class AppComponent {

  state: string = '*';
  hide: string = '*';
  show: string = '*';

  animate() {
    this.state = (this.state === '*') ? 'smaller' : '*';
    this.hide = (this.hide === '*') ? 'hide' : '*';
    this.show = (this.show === 'show') ? '*' : 'show';
  }
}
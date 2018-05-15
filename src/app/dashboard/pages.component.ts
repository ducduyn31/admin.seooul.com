import {Component} from '@angular/core';
import {MENU_ITEMS} from './page-menu';

@Component({
  selector: 'the-page',
  template: `
    <app-dashboard>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-dashboard>
  `
})
export class PagesComponent {


  menu = MENU_ITEMS;

}

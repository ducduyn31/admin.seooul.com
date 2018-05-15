import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';
import {Subscription} from 'rxjs/Subscription';
import {delay, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subMenu: NbMenuItem[] = [
    {
      title: 'PAGE LEVEL MENU',
      group: true
    },
    {
      title: 'Users Manager',
      icon: 'fa fa-users'
    }
  ];

  layout: any = {};
  sidebar: any = {};

  protected $menuClick: Subscription;

  constructor(protected menuService: NbMenuService, protected themeService: NbThemeService, protected sidebarService: NbSidebarService, protected bpService: NbMediaBreakpointsService) {
  }

  ngOnInit(): void {

    const isBp = this.bpService.getByName('is');
    this.$menuClick = this.menuService.onItemSelect().pipe(
      withLatestFrom(this.themeService.onMediaQueryChange()),
      delay(20)
    ).subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
      if (bpTo.width <= isBp.width) {
        this.sidebarService.collapse('menu-sidebar');
      }
    });
  }

  ngOnDestroy(): void {
    this.$menuClick.unsubscribe();
  }

}

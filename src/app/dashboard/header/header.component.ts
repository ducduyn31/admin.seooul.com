import {Component, Input, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any = {};
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {}

}

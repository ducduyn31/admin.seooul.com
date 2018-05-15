import {NgModule} from '@angular/core';
import {
  NbActionsModule, NbContextMenuModule,
  NbLayoutModule, NbMediaBreakpointsService, NbMenuModule, NbMenuService,
  NbSearchModule,
  NbSidebarModule,
  NbSidebarService, NbThemeService,
  NbUserModule
} from "@nebular/theme";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from '@angular/router';
import {NbRoleProvider, NbSecurityModule} from '@nebular/security';
import { HeaderComponent } from '../header/header.component';
import {CommonModule} from '@angular/common';
import {of} from 'rxjs/observable/of';
import { UserTableComponent } from './user-table/user-table.component';
import {FooterComponent} from '../footer/footer.component';
import {UserTableModule} from './user-table/user-table.module';
import { NewsComponent } from './news/news.component';
import {NewsModule} from './news/news.module';

@NgModule({
  imports: [
    NbSidebarModule,
    NbLayoutModule,
    RouterModule,
    NbActionsModule,
    NbUserModule,
    NbSearchModule,
    NbContextMenuModule,
    NbMenuModule,
    CommonModule,
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments']
        },
        user: {
          parent: 'guest',
          create: 'comments'
        }
      }
    }),
    UserTableModule,
    NewsModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    NbSidebarService,
    NbThemeService,
    NbMediaBreakpointsService,
    {
      provide: NbRoleProvider,
      useValue: {
        getRole: () => {
          return of('guest');
        }
      }
    }
  ]
})
export class DashboardModule {
}

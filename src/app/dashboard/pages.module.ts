import { NgModule } from '@angular/core';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {NbMenuModule, NbMenuService} from '@nebular/theme';

@NgModule({
  imports: [
    DashboardModule,
    PagesRoutingModule,
    NbMenuModule.forRoot()
  ],
  declarations: [
    PagesComponent
  ],
  providers: [NbMenuService]
})
export class PagesModule { }

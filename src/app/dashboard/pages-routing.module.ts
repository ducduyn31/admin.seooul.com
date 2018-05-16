import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {UserTableComponent} from './dashboard/user-table/user-table.component';
import {NewsComponent} from './dashboard/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'users',
        component: UserTableComponent
      },
      {
        path: 'news',
        loadChildren: 'app/dashboard/dashboard/news/news.module#NewsModule'
      },
      {
        path: '',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}

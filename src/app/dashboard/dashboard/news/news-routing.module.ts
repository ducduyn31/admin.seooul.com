import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsEditComponent} from './news-edit/news-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'list',
        component: NewsListComponent
      },
      {
        path: 'edit',
        component: NewsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

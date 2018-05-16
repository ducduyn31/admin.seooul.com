import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, NewsListComponent, NewsEditComponent],
  exports: [NewsComponent]
})
export class NewsModule { }

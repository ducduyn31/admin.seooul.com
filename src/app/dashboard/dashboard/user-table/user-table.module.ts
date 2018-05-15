import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserTableComponent} from './user-table.component';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule
  ],
  declarations: [UserTableComponent],
  providers: [
  ]
})
export class UserTableModule { }

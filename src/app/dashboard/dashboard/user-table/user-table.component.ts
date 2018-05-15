import {Component, OnInit} from '@angular/core';
import {ServerDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{

  settings = {
    actions: {
      add: true
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      first_name: {
        title: 'First Name'
      },
      last_name: {
        title: 'Last Name'
      },
      username: {
        title: 'Username',
        editable: false
      },
      email: {
        title: 'Email'
      },
      role: {
        title: 'Role'
      }
    }
  };

  source: ServerDataSource;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/home',
    home: true
  },
  {
    title: 'Users Manager',
    icon: 'nb-gear',
    link: '/home/users'
  },
  {
    title: 'News Manager',
    icon: 'nb-tables',
    link: '/home/news',
    children: [
      {
        title: 'News List',
        link: '/home/news/list'
      },
      {
        title: 'News Edit',
        link: '/home/news/edit'
      }
    ]
  }
];

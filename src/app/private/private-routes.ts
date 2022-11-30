import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component').then((c) => c.UsersComponent),
    title: 'Users',
  },
];

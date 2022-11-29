import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/public.component').then((c) => c.PublicComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./private/private.component').then((c) => c.PrivateComponent),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Not Found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public-routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./private/private-routes').then((m) => m.routes),
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

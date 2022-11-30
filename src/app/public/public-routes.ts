import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicComponent } from './public.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    title: 'Homepage',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'Sign In',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up',
  },
];

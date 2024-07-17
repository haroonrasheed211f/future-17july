import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './compnonents/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreatebinComponent } from './components/createbin/createbin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreatebinComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // wildcard component 404 page
  { path: '**', component: NotFoundComponent },
];

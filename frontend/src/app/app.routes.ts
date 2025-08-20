import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Article } from './pages/article/article';
import { Contacts } from './pages/contacts/contacts';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'article/:url', component: Article },
  { path: 'contacts', component: Contacts },
  { path: 'about', component: About },
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

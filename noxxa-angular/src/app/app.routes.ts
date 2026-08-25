import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Noxxa.nl – Hang- en sluitwerk met een XX-factor!',
  },
  {
    path: 'assortiment/:slug',
    loadComponent: () => import('./pages/category/category').then((m) => m.CategoryPage),
  },
  {
    path: 'verkooppunten',
    loadComponent: () =>
      import('./pages/verkooppunten/verkooppunten').then((m) => m.Verkooppunten),
    title: 'Verkooppunten – Noxxa',
  },
  {
    path: 'documentatie',
    loadComponent: () => import('./pages/documentatie/documentatie').then((m) => m.Documentatie),
    title: 'Documentatie – Noxxa',
  },
  {
    path: 'privacybeleid',
    loadComponent: () => import('./pages/privacybeleid/privacybeleid').then((m) => m.Privacybeleid),
    title: 'Privacybeleid – Noxxa',
  },
  { path: '**', redirectTo: '' },
];

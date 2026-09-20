import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'apply', loadComponent: () => import('./internship-form/internship-form.component').then(m => m.InternshipFormComponent) },
    { path: 'industries', loadComponent: () => import('./industries/industries.component').then(m => m.IndustriesComponent) },
    { path: 'insight/:id', loadComponent: () => import('./insight-detail/insight-detail.component').then(m => m.InsightDetailComponent) },
    { path: 'privacy', loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent) },
    { path: 'disclaimer', loadComponent: () => import('./disclaimer/disclaimer.component').then(m => m.DisclaimerComponent) },
    { path: 'terms', loadComponent: () => import('./terms/terms.component').then(m => m.TermsComponent) },
    { path: 'cookie-policy', loadComponent: () => import('./cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent) },
    { path: 'batches', loadComponent: () => import('./batches/batches.component').then(m => m.BatchesComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: '**', redirectTo: '' }
];

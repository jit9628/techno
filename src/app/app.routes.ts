import { Routes } from '@angular/router';
import { InternshipFormComponent } from './internship-form/internship-form.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsComponent } from './terms/terms.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apply', component: InternshipFormComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent },
    { path: '**', redirectTo: '' }
];

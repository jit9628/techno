import { Routes } from '@angular/router';
import { InternshipFormComponent } from './internship-form/internship-form.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsComponent } from './terms/terms.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { BatchesComponent } from './batches/batches.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndustriesComponent } from './industries/industries.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apply', component: InternshipFormComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent },
    { path: 'batches', component: BatchesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];

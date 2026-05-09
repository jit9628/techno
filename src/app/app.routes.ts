import { Routes } from '@angular/router';
import { InternshipFormComponent } from './internship-form/internship-form.component';
import { HomeComponent } from './home/home.component';
import { BatchesComponent } from './batches/batches.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apply', component: InternshipFormComponent },
    { path: 'batches', component: BatchesComponent },
    { path: '**', redirectTo: '' }
];

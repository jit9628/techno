import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InternshipFormComponent } from './internship-form/internship-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, InternshipFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techno';
}

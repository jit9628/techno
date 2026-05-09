import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent {
  batches = [
    { course: 'Full Stack Java', date: 'May 15, 2024', timing: '10:00 AM - 12:00 PM', duration: '6 Months', status: 'Filling Fast' },
    { course: 'Spring Boot Microservices', date: 'May 20, 2024', timing: '02:00 PM - 04:00 PM', duration: '3 Months', status: 'Open' },
    { course: 'Angular Modern Frontend', date: 'June 01, 2024', timing: '06:00 PM - 08:00 PM', duration: '2 Months', status: 'Upcoming' },
    { course: 'Flutter Cross-Platform', date: 'June 05, 2024', timing: '09:00 AM - 11:00 AM', duration: '4 Months', status: 'Open' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-internship-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './internship-form.component.html',
  styleUrl: './internship-form.component.css'
})
export class InternshipFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    course: 'Java Full Stack',
    duration: '6 Months'
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/internship', this.formData).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: 'Success!',
          text: 'Your application has been submitted successfully.',
          icon: 'success',
          confirmButtonColor: '#0070f3'
        });
        this.formData = { name: '', email: '', phone: '', course: 'Java Full Stack', duration: '6 Months' };
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Submission failed. Please check your connection.',
          icon: 'error'
        });
      }
    });
  }
}

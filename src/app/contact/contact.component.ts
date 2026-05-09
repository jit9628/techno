import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: 'general',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/contact', this.contactForm).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: 'Success!',
          text: res.message,
          icon: 'success',
          confirmButtonColor: '#0070f3'
        });
        this.contactForm = { name: '', email: '', subject: 'general', message: '' };
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error'
        });
      }
    });
  }
}

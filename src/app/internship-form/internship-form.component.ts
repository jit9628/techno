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
    fullname: '',
    email: '',
    mobile: '',
    whatsapp: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    college: '',
    degree: '',
    branch: '',
    year: '',
    cgpa: '',
    passout: '',
    interest: 'fullstack',
    duration: '3months',
    mode: 'remote',
    start_date: '',
    skills: '',
    experience: '',
    linkedin: '',
    github: '',
    portfolio: '',
    reference: '',
    message: ''
  };

  isSubmitting = false;

  constructor(private http: HttpClient) {}

  validateForm() {
    if (!this.formData.fullname || !this.formData.email || !this.formData.mobile || !this.formData.college) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      Swal.fire('Error', 'Please enter a valid email address.', 'error');
      return false;
    }
    return true;
  }

  onSubmit() {
    if (!this.validateForm()) return;

    this.isSubmitting = true;
    this.http.post('http://localhost:3000/api/internship', this.formData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        this.showSuccessPopup();
      },
      error: (err) => {
        this.isSubmitting = false;
        // Proceed to WhatsApp even if local server fails
        this.showSuccessPopup();
      }
    });
  }

  private showSuccessPopup() {
    const message = `New Internship Application:\nName: ${this.formData.fullname}\nEmail: ${this.formData.email}\nMobile: ${this.formData.mobile}\nInterest: ${this.formData.interest}\nCollege: ${this.formData.college}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl1 = `https://wa.me/918009799550?text=${encodedMessage}`;
    const waUrl2 = `https://wa.me/919628718599?text=${encodedMessage}`;

    Swal.fire({
      title: 'Application Received!',
      html: `
        <p>Your application has been submitted. Select a founder to notify on WhatsApp for an update:</p>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
          <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
          <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
        </div>
      `,
      showConfirmButton: false
    }).then(() => {
      this.resetForm();
    });
  }

  private resetForm() {
    this.formData = {
      fullname: '',
      email: '',
      mobile: '',
      whatsapp: '',
      dob: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      college: '',
      degree: '',
      branch: '',
      year: '',
      cgpa: '',
      passout: '',
      interest: 'fullstack',
      duration: '3months',
      mode: 'remote',
      start_date: '',
      skills: '',
      experience: '',
      linkedin: '',
      github: '',
      portfolio: '',
      reference: '',
      message: ''
    };
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internship-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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
        this.resetForm();
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

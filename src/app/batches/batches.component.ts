import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit {
  batches: any[] = [];
  apiUrl = 'https://www.divijixtechnology.com/api/batches';

  benefits = [
    { icon: '🏠', title: 'Remote Work', desc: 'Work from anywhere in the world with our remote-first culture.' },
    { icon: '⏰', title: 'Flexible Timing', desc: 'Manage your own schedule for a better work-life balance.' },
    { icon: '💰', title: 'Good Salary', desc: 'Competitive compensation packages that match your skills.' },
    { icon: '🎓', title: 'Learning Opportunities', desc: 'Constant upskilling through workshops and mentorship.' },
    { icon: '🤝', title: 'Friendly Environment', desc: 'A supportive team that values every voice.' },
    { icon: '🚀', title: 'Growth & Promotions', desc: 'Clear career paths and merit-based advancement.' }
  ];

  jobs = [
    { title: 'Frontend Developer', exp: '1-3 Years', salary: 'Competitive', loc: 'Remote / Noida', type: 'Full-time' },
    { title: 'Backend Developer', exp: '2-4 Years', salary: 'Competitive', loc: 'Remote', type: 'Full-time' },
    { title: 'Full Stack Developer', exp: 'Fresher / Exp', salary: 'Competitive', loc: 'Hybrid', type: 'Full-time' },
    { title: 'UI/UX Designer', exp: '1-2 Years', salary: 'Market Standard', loc: 'Remote', type: 'Full-time' },
    { title: 'Data Analyst', exp: '0-2 Years', salary: 'Competitive', loc: 'Remote', type: 'Internship' },
    { title: 'AI Engineer', exp: '2+ Years', salary: 'Top Tier', loc: 'Noida', type: 'Full-time' },
    { title: 'Digital Marketer', exp: '1-3 Years', salary: 'Competitive', loc: 'Remote', type: 'Full-time' }
  ];

  testimonials = [
    { photo: 'https://i.pravatar.cc/150?u=1', name: 'John Doe', role: 'Full Stack Lead', text: 'Working here helped me grow my skills beyond my expectations.' },
    { photo: 'https://i.pravatar.cc/150?u=2', name: 'Sarah Smith', role: 'UI Designer', text: 'The culture of innovation and creativity is truly inspiring.' },
    { photo: 'https://i.pravatar.cc/150?u=3', name: 'Mike Ross', role: 'AI Intern', text: 'The mentorship program is fantastic. I learned so much in 3 months.' }
  ];

  recruitmentSteps = [
    { id: 1, title: 'Apply', desc: 'Submit your resume and portfolio.' },
    { id: 2, title: 'Screening', desc: 'Initial review by our hiring team.' },
    { id: 3, title: 'Interview', desc: 'Discussion about your experience.' },
    { id: 4, title: 'Technical', desc: 'Deep dive into your technical skills.' },
    { id: 5, title: 'HR Round', desc: 'Culture fit and compensation talk.' },
    { id: 6, title: 'Offer', desc: 'Welcome to the Techno family!' }
  ];

  applicationForm = {
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    portfolio: '',
    experience: ''
  };

  isSubmitting = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBatches();
  }

  fetchBatches() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => this.batches = data,
      error: (err) => console.error('Error fetching batches:', err)
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.applicationForm.resume = event.target.files[0];
    }
  }

  submitApplication() {
    this.isSubmitting = true;
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      Swal.fire('Success!', 'Your application has been submitted.', 'success');
      this.applicationForm = { name: '', email: '', phone: '', resume: null, portfolio: '', experience: '' };
    }, 2000);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  activeTab: string = 'why-us';
  activeFaq: number | null = null;
  
  quoteForm = {
    name: '',
    email: '',
    phone: '',
    description: ''
  };
  isSubmittingQuote = false;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  onContactWhatsApp() {
    if (!this.contactForm.name || !this.contactForm.message) {
      Swal.fire('Error', 'Please enter your name and message.', 'error');
      return;
    }
    const text = `*New Contact Message*%0A*Name:* ${this.contactForm.name}%0A*Email:* ${this.contactForm.email}%0A*Subject:* ${this.contactForm.subject}%0A*Message:* ${this.contactForm.message}`;
    const whatsappUrl = `https://wa.me/918009799550?text=${text}`;
    window.open(whatsappUrl, '_blank');
  }

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (frag === 'services' || frag === 'why-us' || frag === 'tech') {
        this.activeTab = frag;
      }
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  onSubmitQuote() {
    if (!this.quoteForm.name || !this.quoteForm.email || !this.quoteForm.phone) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmittingQuote = true;
    this.http.post('https://www.divijixtechnology.com/api/quote', this.quoteForm).subscribe({
      next: (res: any) => {
        this.isSubmittingQuote = false;
        Swal.fire({
          title: 'Success!',
          text: 'Your quote request has been sent.',
          icon: 'success',
          confirmButtonColor: '#004a99'
        });
        this.quoteForm = { name: '', email: '', phone: '', description: '' };
      },
      error: (err) => {
        this.isSubmittingQuote = false;
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send request. Please try again.',
          icon: 'error'
        });
      }
    });
  }
}

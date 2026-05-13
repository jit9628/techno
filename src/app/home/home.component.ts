import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {
  activeTab: string = 'why-us';
  activeFaq: number | null = null;
  
  @ViewChild('statsSection') statsSection!: ElementRef;

  stats = [
    { label: 'Success <br> Stories', target: 150, current: 0, suffix: '+' },
    { label: 'Global <br> Partners', target: 25, current: 0, suffix: '+' },
    { label: 'Cutting-edge <br> Technologies', target: 10, current: 0, suffix: '+' },
    { label: 'Dedicated <br> Support', target: 24, current: 0, suffix: '/7' }
  ];
  countersStarted = false;
  
  quoteForm = {
    name: '',
    email: '',
    phone: '',
    description: ''
  };
  isSubmittingQuote = false;
  isSubmitting = false;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (frag === 'services' || frag === 'why-us' || frag === 'tech') {
        this.activeTab = frag;
      }
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.countersStarted) {
        this.startCounters();
        this.countersStarted = true;
      }
    }, { threshold: 0.5 });

    if (this.statsSection) {
      observer.observe(this.statsSection.nativeElement);
    }
  }

  startCounters() {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    this.stats.forEach(stat => {
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        stat.current = Math.round(stat.target * progress);
        if (frame === totalFrames) {
          stat.current = stat.target;
          clearInterval(interval);
        }
      }, frameRate);
    });
  }

  onSubmitContact() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;
    this.http.post('http://localhost:3000/api/contact', this.contactForm).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        // Construct WhatsApp message
        const message = `New Home Contact Query:\nName: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\nSubject: ${this.contactForm.subject}\nMessage: ${this.contactForm.message}`;
        const encodedMessage = encodeURIComponent(message);
        
        const waUrl1 = `https://wa.me/918009799550?text=${encodedMessage}`;
        const waUrl2 = `https://wa.me/919628718599?text=${encodedMessage}`;

        Swal.fire({
          title: 'Success!',
          html: `
            <p>Message received. Select a founder to notify on WhatsApp:</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
              <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
              <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
            </div>
          `,
          showConfirmButton: false
        }).then(() => {
          this.contactForm = { name: '', email: '', subject: '', message: '' };
        });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showContactSuccessPopup();
      }
    });
  }

  private showContactSuccessPopup() {
    const message = `New Home Contact Query:\nName: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\nSubject: ${this.contactForm.subject}\nMessage: ${this.contactForm.message}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl1 = `https://wa.me/918009799550?text=${encodedMessage}`;
    const waUrl2 = `https://wa.me/919628718599?text=${encodedMessage}`;

    Swal.fire({
      title: 'Success!',
      html: `
        <p>Message received. Select a founder to notify on WhatsApp:</p>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
          <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
          <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
        </div>
      `,
      showConfirmButton: false
    }).then(() => {
      this.contactForm = { name: '', email: '', subject: '', message: '' };
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
    this.http.post('http://localhost:3000/api/contact', this.quoteForm).subscribe({
      next: (res: any) => {
        this.isSubmittingQuote = false;
        
        // Construct WhatsApp message
        const message = `New Quote Request:\nName: ${this.quoteForm.name}\nEmail: ${this.quoteForm.email}\nPhone: ${this.quoteForm.phone}\nDescription: ${this.quoteForm.description}`;
        const encodedMessage = encodeURIComponent(message);
        
        const waUrl1 = `https://wa.me/919628718599?text=${encodedMessage}`;
        const waUrl2 = `https://wa.me/918009799550?text=${encodedMessage}`;

        Swal.fire({
          title: 'Quote Request Received!',
          html: `
            <p>Select a founder to notify on WhatsApp for a faster quote:</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
              <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
              <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
            </div>
          `,
          showConfirmButton: false
        }).then(() => {
          this.quoteForm = { name: '', email: '', phone: '', description: '' };
        });
      },
      error: (err) => {
        this.isSubmittingQuote = false;
        this.showQuoteSuccessPopup();
      }
    });
  }

  private showQuoteSuccessPopup() {
    const message = `New Quote Request:\nName: ${this.quoteForm.name}\nEmail: ${this.quoteForm.email}\nPhone: ${this.quoteForm.phone}\nDescription: ${this.quoteForm.description}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl1 = `https://wa.me/919628718599?text=${encodedMessage}`;
    const waUrl2 = `https://wa.me/918009799550?text=${encodedMessage}`;

    Swal.fire({
      title: 'Quote Request Received!',
      html: `
        <p>Select a founder to notify on WhatsApp for a faster quote:</p>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
          <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
          <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
        </div>
      `,
      showConfirmButton: false
    }).then(() => {
      this.quoteForm = { name: '', email: '', phone: '', description: '' };
    });
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface InquiryButton {
  text: string;
  class: string;
  action?: string;
  link?: string;
}

interface InquirySection {
  title: string;
  text: string;
  button: InquiryButton;
}

interface InvestorContact {
  label: string;
  name: string;
  tel?: string;
  email: string;
}

interface InquiryCategory {
  title: string;
  open: boolean;
  subtitle?: string;
  content?: string;
  buttons?: InquiryButton[];
  sections?: InquirySection[];
  investorContacts?: InvestorContact[];
  bottomButton?: InquiryButton;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
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
  isSubmitting = false;

  faqs = [
    {
      question: 'What types of internships do you offer?',
      answer: 'We offer internships in Full Stack Development, AI/ML, Data Science, and UI/UX Design.',
      open: false
    },
    {
      question: 'Is there a selection process?',
      answer: 'Yes, after applying, our team reviews your profile and schedules a technical interview.',
      open: false
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, all successful interns receive an industry-recognized certificate and a letter of recommendation.',
      open: false
    }
  ];

  inquiryCategories: InquiryCategory[] = [
    { 
      title: "Request for Service", 
      open: false, 
      subtitle: "Get in touch to learn more about our solutions and services tailored to help enterprises Scale at Speed.",
      buttons: [
        { text: "REQUEST FOR SERVICES", class: "btn-maroon", action: "scroll" },
        { text: "SUBMIT AN RFP", class: "btn-red", action: "scroll" }
      ]
    },
    { 
      title: "Join Techno", 
      open: false, 
      subtitle: "Discover exciting career opportunities and apply now through our dedicated career portal.",
      buttons: [
        { text: "EXPLORE CAREERS", class: "btn-red", link: "/batches" },
        { text: "APPLY NOW", class: "btn-red", link: "/apply" }
      ]
    },
    { 
      title: "Vendor Registration", 
      open: false, 
      subtitle: "Be part of our expansive and trusted supplier network.",
      buttons: [
        { text: "SUBMIT A PROPOSAL", class: "btn-red", action: "scroll" }
      ]
    },
    { 
      title: "Ex-Employee Requests", 
      open: false, 
      sections: [
        {
          title: "Ex-Employee Verification",
          text: "Raise a request to verify ex-employee status.",
          button: { text: "REQUEST VERIFICATION", class: "btn-red", action: "scroll" }
        },
        {
          title: "Access Alumni Portal",
          text: "Access former employment documents and/or explore exclusive alumni benefits in our dedicated portal.",
          button: { text: "ACCESS ALUMNI PORTAL", class: "btn-red", action: "scroll" }
        }
      ]
    },
    { 
      title: "Investor Information", 
      open: false, 
      subtitle: "For all investor-related queries, reach out to our investor relations team.",
      investorContacts: [
        {
          label: "Institutional Investors",
          name: "Divyanshi, Founder & CEO",
          tel: "+91 120 6176000",
          email: "founder@djttechnology.in"
        },
        {
          label: "Retail Investors",
          name: "Jitendra Shukla, Strategic Lead",
          tel: "+91 020 40109111",
          email: "jitendra@djttechnology.in"
        },
        {
          label: "Nodal Officer",
          name: "Divyanshi, Founder & CEO",
          email: "legal@djttechnology.in"
        }
      ],
      bottomButton: { text: "CONTACT INVESTOR RELATIONS", class: "btn-red", action: "scroll" }
    },
    { 
      title: "Other Requests", 
      open: false, 
      content: "Have a unique inquiry? We are here to help. Select this option for any other specific requests or feedback you may have.",
      buttons: [
        { text: "CONTACT US", class: "btn-red", action: "scroll" }
      ]
    }
  ];

  constructor(private http: HttpClient) {}

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  toggleInquiry(index: number) {
    this.inquiryCategories[index].open = !this.inquiryCategories[index].open;
  }

  scrollToForm() {
    const formElement = document.querySelector('.contact-details');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  validateForm() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      Swal.fire('Error', 'Please enter a valid email address.', 'error');
      return false;
    }
    return true;
  }

  onSubmit() {
    if (!this.validateForm()) return;

    this.isSubmitting = true;
    this.http.post('http://localhost:3000/api/contact', this.contactForm).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        
        const message = `New Contact Query:\nName: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\nSubject: ${this.contactForm.subject}\nMessage: ${this.contactForm.message}`;
        const encodedMessage = encodeURIComponent(message);
        
        const waUrl1 = `https://wa.me/919628718599?text=${encodedMessage}`;
        const waUrl2 = `https://wa.me/918009799550?text=${encodedMessage}`;

        Swal.fire({
          title: 'Success!',
          html: `
            <p>Your message is received. Now, select which founder to notify on WhatsApp:</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
              <a href="${waUrl1}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #25d366; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (9628718599)</a>
              <a href="${waUrl2}" target="_blank" class="swal2-confirm swal2-styled" style="background-color: #128c7e; text-decoration: none; margin: 0; padding: 12px;">Notify on WhatsApp (8009799550)</a>
            </div>
          `,
          showConfirmButton: false
        }).then(() => {
          this.contactForm = { name: '', email: '', subject: 'general', message: '' };
        });
      },
      error: (err) => {
        this.isSubmitting = false;
        Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
      }
    });
  }
}

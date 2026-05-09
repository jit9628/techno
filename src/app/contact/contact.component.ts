import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    console.log('Form Submitted:', this.contactForm);
    // Add logic for sending email or showing success message
    alert('Thank you for your message! We will get back to you soon.');
  }
}

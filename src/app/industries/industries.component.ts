import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {
  industries = [
    {
      title: 'Finance & Banking',
      icon: '🏦',
      desc: 'Secure digital banking solutions, fintech innovation, and robust financial systems built for the next generation.'
    },
    {
      title: 'Healthcare',
      icon: '🏥',
      desc: 'Advanced patient care systems, telehealth platforms, and secure data management for modern healthcare providers.'
    },
    {
      title: 'Education',
      icon: '🎓',
      desc: 'E-learning platforms, student management systems, and interactive tools for the future of education.'
    },
    {
      title: 'E-Commerce',
      icon: '🛒',
      desc: 'Scalable online marketplaces, secure payment gateways, and AI-driven personalized shopping experiences.'
    }
  ];

  onExploreClick(title: string) {
    Swal.fire({
      title: `<span style="color: #007bff">${title} Solutions</span>`,
      html: `
        <div style="text-align: left; padding: 10px;">
          <p>Thank you for your interest in our <strong>${title}</strong> expertise!</p>
          <p>Our team at <strong>Divijix Technology</strong> is currently preparing a comprehensive solutions brochure and detailed case studies for this sector.</p>
          <p style="margin-top: 15px; font-weight: 500;">What we offer in this sector:</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;">✅ Custom Enterprise Architectures</li>
            <li style="margin-bottom: 8px;">✅ AI-Powered Automation</li>
            <li style="margin-bottom: 8px;">✅ Scalable Cloud Infrastructure</li>
            <li style="margin-bottom: 8px;">✅ 24/7 Dedicated Support</li>
          </ul>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'REQUEST FULL DEMO',
      confirmButtonColor: '#007bff',
      showCancelButton: true,
      cancelButtonText: 'CLOSE',
      background: '#ffffff',
      customClass: {
        popup: 'glass-popup'
      }
    });
  }
}

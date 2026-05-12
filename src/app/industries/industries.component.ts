import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  activeTab: string = 'why-us';
  activeFaq: number | null = null;

  constructor(private route: ActivatedRoute) {}

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
}

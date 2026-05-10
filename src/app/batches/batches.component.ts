import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit {
  batches: any[] = [];
  apiUrl = 'https://www.divijixtechnology.com/api/batches';

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
}

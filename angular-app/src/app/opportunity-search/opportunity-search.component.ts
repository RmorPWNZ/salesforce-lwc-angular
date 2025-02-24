import { Component } from '@angular/core';
import { OpportunityService } from '../opportunity.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opportunity-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './opportunity-search.component.html',
  styleUrls: ['./opportunity-search.component.css']
})
export class OpportunitySearchComponent {
  searchTerm: string = '';
  minAmount?: number;
  maxAmount?: number;
  opportunities: any[] = [];
  debounceTimeout: any;

  constructor(private opportunityService: OpportunityService) {}

  onInputChange() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    // Debounce for 500ms
    this.debounceTimeout = setTimeout(() => {
      this.search();
    }, 500);
  }

  search() {
    this.opportunityService.searchOpportunities(this.searchTerm, this.minAmount, this.maxAmount)
      .subscribe({
        next: (data: any[]) => { this.opportunities = data; },
        error: (err) => { console.error(err); },
    });
  }
}

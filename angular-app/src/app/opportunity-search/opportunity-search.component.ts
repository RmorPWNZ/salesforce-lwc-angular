import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LightningCardComponent } from "../lightning-card/lightning-card.component";
import { LightningDatatableComponent } from '../lightning-datatable/lightning-datatable.component';
import { OpportunitySearchService } from '../services/opportunity-search.service';
import { OpportunitySearchParams } from '../model/opportunity.model';

@Component({
  selector: 'app-opportunity-search',
  standalone: true,
  imports: [FormsModule, CommonModule, LightningCardComponent, LightningDatatableComponent],
  templateUrl: './opportunity-search.component.html',
  styleUrls: ['./opportunity-search.component.css']
})
export class OpportunitySearchComponent {
  searchTerm: string = '';
  minAmount?: number;
  maxAmount?: number;
  opportunities: any[] = [];
  debounceTimeout: any;
  
  constructor(private opportunitySearchService: OpportunitySearchService) {}

  get opportunitiesFound(): Boolean {
    return this.opportunities.length > 0;
  }

  get searchParams(): OpportunitySearchParams {
    return {
      searchTerm: this.searchTerm,
      minAmount: this.minAmount,
      maxAmount: this.maxAmount
    };
  }

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
    this.opportunitySearchService.searchOpportunities(this.searchParams)
      .subscribe({
        next: (data: any[]) => { this.opportunities = data; },
        error: (err) => { console.error(err); },
    });
  }
}

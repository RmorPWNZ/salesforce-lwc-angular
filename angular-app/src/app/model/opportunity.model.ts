export interface Opportunity {
  name?: string;
  stageName?: string;
  closeDate?: string;
  amount?: number;
}

export interface OpportunitySearchParams {
  searchTerm?: string;
  minAmount?: number;
  maxAmount?: number;
}
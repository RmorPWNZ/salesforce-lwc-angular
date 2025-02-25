import { Injectable } from '@angular/core';
import { Opportunity, OpportunitySearchParams } from '../model/opportunity.model';
import { RestApiService } from './rest-api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunitySearchService {

  constructor(private restApiService: RestApiService) {}

  searchOpportunities(params: OpportunitySearchParams): Observable<Opportunity[]> {
    return this.restApiService.request(
      this.buildHttpParams(params),
      'opportunitysearch'
    );

  }

  private buildHttpParams(params: OpportunitySearchParams): HttpParams {
    return new HttpParams().appendAll({
      searchTerm: params.searchTerm || '',
      minAmount: params.minAmount?.toString() || '',
      maxAmount: params.maxAmount?.toString() || ''
    });
  }

}

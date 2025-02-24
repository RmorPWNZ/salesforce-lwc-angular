import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  // Replace with your actual Salesforce endpoint or proxy URL.
  private baseUrl = 'https://SWE42.my.salesforce.com/services/apexrest/opportunitysearch';

  constructor(private http: HttpClient) { }

  searchOpportunities(searchTerm: string, minAmount?: number, maxAmount?: number): Observable<any> {
    const data = {
      searchTerm: searchTerm,
      minAmount: minAmount || '',
      maxAmount: maxAmount || ''
    };

    const params = new HttpParams();
    params.appendAll(data)

    return this.http.get<any>(this.baseUrl, { params });
  }
}

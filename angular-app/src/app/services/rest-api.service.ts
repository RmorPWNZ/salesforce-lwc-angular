import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { JWTClient } from '../model/jwt.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private instanceUrl = '';
  private accessToken = '';

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });
  }

  setAccessToken(client: JWTClient): void {
    this.accessToken = client.oauthToken;
    this.instanceUrl = client.instanceUrl;
  }

  request(params: HttpParams, pathUrl: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.instanceUrl}/services/apexrest/${pathUrl}`, { 
      headers: this.headers,
      params: params
    }).pipe(
      map((response) =>
        response.map((opp) => ({
          name: opp.Name,
          stageName: opp.StageName,
          closeDate: opp.CloseDate,
          amount: opp.Amount || 0
        }))
      ),
      catchError((error) => {
        console.error("Search Opportunity Failed:", error);
        return throwError(() => new Error("Failed to retrieve opportunities"));
      })
    );
  }
}
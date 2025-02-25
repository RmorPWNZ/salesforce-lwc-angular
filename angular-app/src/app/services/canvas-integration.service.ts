import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { JWTPayload } from '../model/jwt.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasIntegrationService {

  constructor(private restApiService: RestApiService) { }

  private get decodedJWTPayload(): JWTPayload  {
    // JWT is stored in the format "header.payload.signature"
    const storedRequest = localStorage.getItem("canvasSignedRequest");
    return storedRequest && JSON.parse(atob(storedRequest.split(".")[1]));
  }

  getCanvasSignedRequest(): void {
    const payload = this.decodedJWTPayload;
  
    if (payload && payload.client?.oauthToken && payload.client.instanceUrl) {
      this.restApiService.setAccessToken(payload.client);
    }
  }
}

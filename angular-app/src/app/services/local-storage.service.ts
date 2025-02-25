import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  storeCanvasSignedRequest(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const signedRequest = urlParams.get("signedRequest");

    if (signedRequest) {
      localStorage.setItem("canvasSignedRequest", signedRequest);
      this.removeSignedRequestFromURL();
    }
  }

  private removeSignedRequestFromURL(): void {
    window.history.replaceState({}, document.title, "/");
  }
}

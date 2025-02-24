// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Check for Canvas signed_request in the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('signed_request')) {
  console.log('Canvas signed_request received:', urlParams.get('signed_request'));
  // You could also parse and store the signed request if needed
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule, FormsModule)]
}).catch(err => console.error(err));

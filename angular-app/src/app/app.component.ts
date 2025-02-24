import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitySearchComponent } from "./opportunity-search/opportunity-search.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OpportunitySearchComponent, HttpClientModule], // Import necessary modules here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
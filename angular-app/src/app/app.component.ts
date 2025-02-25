import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitySearchComponent } from './opportunity-search/opportunity-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CanvasIntegrationService } from './services/canvas-integration.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OpportunitySearchComponent, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private canvasService: CanvasIntegrationService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.localStorage.storeCanvasSignedRequest();
    this.canvasService.getCanvasSignedRequest();
  }
}

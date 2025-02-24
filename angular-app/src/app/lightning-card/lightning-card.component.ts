import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lightning-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightning-card.component.html'
})
export class LightningCardComponent {
  @Input()
  title?: string;
}

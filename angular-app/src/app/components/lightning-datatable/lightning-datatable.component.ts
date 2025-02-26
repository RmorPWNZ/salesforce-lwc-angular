import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opportunity } from 'src/app/model/opportunity.model';


@Component({
  selector: 'lightning-datatable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightning-datatable.component.html'
})
export class LightningDatatableComponent {
  @Input()
  opportunities: Opportunity[] = [];
}

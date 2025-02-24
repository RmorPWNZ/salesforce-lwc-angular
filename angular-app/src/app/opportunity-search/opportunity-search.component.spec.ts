import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySearchComponent } from './opportunity-search.component';

describe('OpportunitySearchComponent', () => {
  let component: OpportunitySearchComponent;
  let fixture: ComponentFixture<OpportunitySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

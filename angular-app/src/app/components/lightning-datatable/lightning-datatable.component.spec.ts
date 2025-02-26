import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningDatatableComponent } from './lightning-datatable.component';

describe('LightningDatatableComponent', () => {
  let component: LightningDatatableComponent;
  let fixture: ComponentFixture<LightningDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LightningDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightningDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

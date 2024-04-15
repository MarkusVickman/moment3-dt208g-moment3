import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMetricComponent } from './calc-metric.component';

describe('CalcMetricComponent', () => {
  let component: CalcMetricComponent;
  let fixture: ComponentFixture<CalcMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcMetricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

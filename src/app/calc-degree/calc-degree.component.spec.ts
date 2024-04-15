import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDegreeComponent } from './calc-degree.component';

describe('CalcDegreeComponent', () => {
  let component: CalcDegreeComponent;
  let fixture: ComponentFixture<CalcDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcDegreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

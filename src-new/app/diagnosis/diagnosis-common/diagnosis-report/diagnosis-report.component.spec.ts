import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisReportComponent } from './diagnosis-report.component';

describe('DiagnosisReportComponent', () => {
  let component: DiagnosisReportComponent;
  let fixture: ComponentFixture<DiagnosisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

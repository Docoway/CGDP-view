import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelinfoFormComponent } from './excelinfo-form.component';

describe('ExcelinfoFormComponent', () => {
  let component: ExcelinfoFormComponent;
  let fixture: ComponentFixture<ExcelinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

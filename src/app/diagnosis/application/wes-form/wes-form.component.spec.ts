import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WESFormComponent } from './wes-form.component';

describe('WESFormComponent', () => {
  let component: WESFormComponent;
  let fixture: ComponentFixture<WESFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WESFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WESFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

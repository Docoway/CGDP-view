import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfoFormComponent } from './basicinfo-form.component';

describe('BasicinfoFormComponent', () => {
  let component: BasicinfoFormComponent;
  let fixture: ComponentFixture<BasicinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

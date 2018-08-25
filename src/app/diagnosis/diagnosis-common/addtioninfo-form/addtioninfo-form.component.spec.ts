import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtioninfoFormComponent } from './addtioninfo-form.component';

describe('AddtioninfoFormComponent', () => {
  let component: AddtioninfoFormComponent;
  let fixture: ComponentFixture<AddtioninfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtioninfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtioninfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

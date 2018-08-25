import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhenotypeTreeComponent } from './phenotype-tree.component';

describe('PhenotypeTreeComponent', () => {
  let component: PhenotypeTreeComponent;
  let fixture: ComponentFixture<PhenotypeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhenotypeTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhenotypeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

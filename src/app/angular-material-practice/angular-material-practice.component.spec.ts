import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialPracticeComponent } from './angular-material-practice.component';

describe('AngularMaterialPracticeComponent', () => {
  let component: AngularMaterialPracticeComponent;
  let fixture: ComponentFixture<AngularMaterialPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

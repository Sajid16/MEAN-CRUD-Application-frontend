import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckallComponent } from './uncheckall.component';

describe('UncheckallComponent', () => {
  let component: UncheckallComponent;
  let fixture: ComponentFixture<UncheckallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncheckallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

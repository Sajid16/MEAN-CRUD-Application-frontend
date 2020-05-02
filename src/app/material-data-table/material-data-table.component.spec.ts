import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDataTableComponent } from './material-data-table.component';

describe('MaterialDataTableComponent', () => {
  let component: MaterialDataTableComponent;
  let fixture: ComponentFixture<MaterialDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

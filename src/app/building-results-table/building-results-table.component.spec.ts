import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingResultsTableComponent } from './building-results-table.component';

describe('BuildingResultsTableComponent', () => {
  let component: BuildingResultsTableComponent;
  let fixture: ComponentFixture<BuildingResultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingResultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSearchComponent } from './gender-search.component';

describe('GenderSearchComponent', () => {
  let component: GenderSearchComponent;
  let fixture: ComponentFixture<GenderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

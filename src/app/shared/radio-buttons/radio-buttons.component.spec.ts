import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsComponent } from './radio-buttons.component';
import { FormsModule } from '@angular/forms';

describe('RadioButtonsComponent', () => {
  let component: RadioButtonsComponent;
  let fixture: ComponentFixture<RadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ RadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display options inputted', () => {
    component.options = ["1", "2", "3"];
    fixture.detectChanges();
    let opts = fixture.nativeElement.querySelectorAll(".radio-btn-label");
    expect(opts).toBeTruthy();
    expect(opts.length).toEqual(3);
  })

  it('should not display if no options', () => {
    component.options = [];
    fixture.detectChanges();
    let opts = fixture.nativeElement.querySelectorAll(".radio-btn-label");
    expect(opts.length).toEqual(0);
  })
});

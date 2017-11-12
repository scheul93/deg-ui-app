import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate labels', () => {
    component.min = 1;
    component.max = 5;
    component.stepSize = 1;
    fixture.detectChanges();
    let output = ["1", "2", "3", "4", "5"];
    component.generateLabelList();
    expect(component.labelList).toBeTruthy();
    expect(component.labelList.length).toEqual(5);
    expect(component.labelList).toEqual(output);

    output=["5", "10", "15", "20"];
    component.min = 5;
    component.max = 22;
    component.stepSize = 5;
    fixture.detectChanges();
    component.generateLabelList();
    expect(component.labelList).toBeTruthy();
    expect(component.labelList.length).toEqual(4);
    expect(component.labelList).toEqual(output);
  })

  it('should take into account include all opt', () => {
    component.min = 1;
    component.max = 5;
    component.stepSize = 1;
    component.includeAllOpt = true;
    fixture.detectChanges();
    let output = ["1", "2", "3", "4", "5", "All"];
    component.generateLabelList();
    expect(component.labelList).toBeTruthy();
    expect(component.labelList.length).toEqual(6);
    expect(component.labelList).toEqual(output);
    expect(component.max).toEqual(6);
  })

  describe('should emit value change', () => {
      it('with all input', () => {
        component.min = 1;
        component.max = 5;
        component.stepSize = 1;
        component.includeAllOpt = true;
        fixture.detectChanges();
        component.generateLabelList();
        component.valueChange.subscribe(e => {
            expect(e).toEqual("All");
        })
      });

      it('with change in input', () => {
        component.min = 1;
        component.max = 5;
        component.stepSize = 1;
        component.distance = 5;
        fixture.detectChanges();
        component.valueChange.subscribe(e => {
            expect(e).toEqual(5);
        })
      })
  })
});

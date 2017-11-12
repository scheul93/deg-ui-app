import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
  @Input() min:number;
  @Input() max:number;
  @Input() stepSize: number;
  @Input() includeAllOpt:boolean;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  rangeVal;
  distance;
  labelList: string[] = [];
  labelWidth:number;

  constructor() { }

  ngOnInit() {
    this.generateLabelList();
    this.labelWidth = Math.floor(100 / this.labelList.length);
  }

  generateLabelList(){
    for(let i = this.min; i <= this.max; i += this.stepSize){
      this.labelList.push(i.toString());
    }
    if(this.includeAllOpt){
      this.labelList.push("All");
      this.max += this.stepSize;
      this.distance = this.labelList[this.labelList.length - 1];
    }
  }

  sendValueChange(){
    this.valueChange.emit(this.distance);
  }

}

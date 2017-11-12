import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'radio-buttons',
  template: 
  `
  <div *ngFor="let opt of options">
    <input type="radio"  
      [value]="opt"
      [(ngModel)]="selection"
      (ngModelChange)="selectionChanged()">
      <span class="radio-btn-label">{{opt}}</span>
  </div>
  `,
  styleUrls: ['./radio-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioButtonsComponent implements OnInit {
  @Input() options:string[];
  @Input() defaultValue:string;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();
  private selection:string;

  constructor() { }

  ngOnInit() {
    this.selection = this.defaultValue;
  }

  selectionChanged(){
    this.selectionChange.emit(this.selection);
  }

}

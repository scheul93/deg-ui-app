import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gender-search',
  template: 
  `
  <div class="gender-search-label">Gender</div>
  <radio-buttons [options]="genderOptions" (selectionChange)="updateSearch($event)"></radio-buttons>
  `,
  styleUrls: ['./gender-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenderSearchComponent implements OnInit {

  private genderOptions = ["Male", "Female", "No preference"];

  constructor() { }

  ngOnInit() {
  }

  updateSearch(selectedValue:string){
    //TODO: make this re-initiate search  
    console.log(selectedValue);
  }

}

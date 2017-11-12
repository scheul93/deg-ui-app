import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'gender-search',
  template: 
  `
  <div class="gender-search-label">Gender</div>
  <radio-buttons [options]="genderOptions"
    [defaultValue]="DEFAULT_GENDER"
    (selectionChange)="updateSearch($event)">
  </radio-buttons>
  `,
  styleUrls: ['./gender-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenderSearchComponent implements OnInit {

  private genderOptions = ["Male", "Female", "No preference"];
  readonly DEFAULT_GENDER = "No preference";

  constructor(private searchSvc: SearchService) { }

  ngOnInit() {
  }

  updateSearch(selectedValue:string){
    //TODO: make this re-initiate search  
    if(selectedValue === "No preference"){
      this.searchSvc.gender = '';
    } else {
      this.searchSvc.gender = selectedValue;
    }
  }

}

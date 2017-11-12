import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'zipcode-search',
  templateUrl: './zipcode-search.component.html',
  styleUrls: ['./zipcode-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ZipcodeSearchComponent implements OnInit {

  constructor(private searchSvc: SearchService) { }

  ngOnInit() {}

  searchDoctors(form){
    this.searchSvc.searchDoctors(form.value.zipcode);
  }

}

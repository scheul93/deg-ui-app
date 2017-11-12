import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'distance-search',
  templateUrl: './distance-search.component.html',
  styleUrls: ['./distance-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistanceSearchComponent implements OnInit {

  constructor(private searchSvc: SearchService) { }

  ngOnInit() {
  }

  sliderChange(newSliderVal){
    //TODO: send to service to filter list
  }

}

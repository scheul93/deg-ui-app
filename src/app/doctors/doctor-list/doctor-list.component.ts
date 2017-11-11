import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { SearchService } from '../../search/shared/search.service';
import { Doctor } from '../shared/doctor.model';

@Component({
  selector: 'doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorListComponent implements OnInit, OnDestroy {
  private searchSubscription;
  private listOfResults: Doctor[] = [];

  constructor(private searchSvc: SearchService) { }

  ngOnInit() {
    this.searchSubscription = this.searchSvc.listOfDoctors.subscribe(
      doctorList => {
        this.listOfResults = doctorList || [];
      }
    )
  }

  ngOnDestroy(){
    this.searchSubscription.unsubscribe();
  }

}

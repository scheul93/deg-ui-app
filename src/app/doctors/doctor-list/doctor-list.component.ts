import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { SearchService } from '../../search/shared/search.service';
import { Doctor } from '../shared/doctor.model';
import { GenderPipe } from '../../shared/gender.pipe';

@Component({
  selector: 'doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  providers:[GenderPipe],
  encapsulation: ViewEncapsulation.None
})
export class DoctorListComponent implements OnInit, OnDestroy {
  private searchSubscription;
  private listOfResults: Doctor[] = [];

  constructor(private searchSvc: SearchService, private genderPipe: GenderPipe) { }

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

  getLength(){
    return this.genderPipe.transform(this.listOfResults, this.searchSvc.gender).length;
  }

}

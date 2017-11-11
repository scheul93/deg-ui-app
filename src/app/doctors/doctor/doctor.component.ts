import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Doctor } from '../shared/doctor.model';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorComponent implements OnInit {
  @Input() doctorInfo: Doctor;
  constructor() { }

  ngOnInit() {
  }

}

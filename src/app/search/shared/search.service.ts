import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Doctor } from '../../doctors/shared/doctor.model';

@Injectable()
export class SearchService {
  public zipCode:string;
  public gender:string;

  private _listOfDoctors: BehaviorSubject<Doctor[]> = new BehaviorSubject<Doctor[]>(null);
  public readonly listOfDoctors: Observable<Doctor[]> = this._listOfDoctors.asObservable();

  constructor(private http: Http) { }

  searchDoctors(zipCode:string){
    this.zipCode = zipCode;
    return this.http.get('./assets/json/doctors.json').subscribe(
      data => {
        let results = data.json().results;
        let list = results.map(item => {
          return new Doctor(item);
        })
        this._listOfDoctors.next(list);
      }
    );
  }

}

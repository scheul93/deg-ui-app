import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../doctors/shared/doctor.model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(list: Doctor[], genderChoice: string): Doctor[] {
    if(genderChoice){
      return list.filter(item => item.gender === genderChoice);
    } else {
      return list;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Contact, objFields } from './task04.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Contact[], name: objFields | undefined, direction: boolean): Contact[] {
    if(!value) return [];
    if(direction === null) return value;
    
    if(name === 'fname' || name === 'lname' || name === 'number') {
      if(direction) {
        return value.sort((a, b) => (a[name] > b[name]) ? 1 : (a[name] < b[name]) ? -1 : 0);
      }
      else {
        return value.sort((a, b) => (a[name] < b[name]) ? 1 : (a[name] > b[name]) ? -1 : 0);
      }
    }
    else {
      return value;
    }
  }

}
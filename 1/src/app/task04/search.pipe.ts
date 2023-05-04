import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './task04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Contact[], field: string): Contact[] {
    if(!value) return [];
    if(!field) return value;
    return value.filter(contact => 
      contact.fname.toLowerCase().includes(field.toLowerCase()) 
      || contact.lname.toLowerCase().includes(field.toLowerCase()) 
      || contact.number.toLowerCase().includes(field.toLowerCase()));
  }

}
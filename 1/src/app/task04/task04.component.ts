import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.scss']
})
export class Task04Component implements OnInit {

  public searchText = '';
  public isModal = false;
  public indexEdit: number | undefined = undefined;

  public nameField: Array<objFields> = ['fname', 'lname', 'number'];
  public sortDirection = {
    name: <objFields | undefined>undefined,
    direction: true
  }
  
  public newContact: Contact = {
    fname: '',
    lname: '',
    number: ''
  };
  public regExp = {
    fname: /^[\w \-]{2,20}$/,
    lname: /^[\w \-]{2,20}$/,
    number: /^[\d\+]{6,13}$/
  };
  public inputWrong = {
    fname: false,
    lname: false,
    number: false
  };

  public phoneBook: Contact[] = [
    { 
      fname: 'Petya', 
      lname: 'Zhuk', 
      number: '0631111111' 
    },
    { 
      fname: 'Petro', 
      lname: 'Petriv', 
      number: '0631222222' 
    },
    { 
      fname: 'Alejandro', 
      lname: 'Del Rio Albrechet', 
      number: '0633333333' 
    },
    { 
      fname: 'Vasylyna', 
      lname: 'Vrublevska', 
      number: '0635555555' 
    },
    { 
      fname: 'Ira', 
      lname: 'Tytar', 
      number: '0636666666' 
    },
    { 
      fname: 'Sofia', 
      lname: 'Zhuk', 
      number: '0977777777' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeDirection(field: objFields): void {
    if(this.sortDirection.name === field) {
      this.sortDirection.direction = !this.sortDirection.direction;
    }
    else {
      this.sortDirection.name = field;
      this.sortDirection.direction = true;
    }
  }

  addContact(): void {
    this.indexEdit = undefined;
    let key: keyof Contact;
    for (key in this.newContact) {
      this.newContact[key] = '';
    }
    this.isModal = true;
  }

  editContact(index: number): void {
    let key: keyof Contact;
    for (key in this.newContact) {
      this.newContact[key] = this.phoneBook[index][key];
      this.inputWrong[key] = false;
    }
    this.indexEdit = index;
    this.isModal = true;
  }

  deleteContact(index: number): void {
    this.phoneBook.splice(index, 1);
  }

  saveContact(): void {
    if(!this.checkInputs()) {
      return;
    }
    if(this.indexEdit === undefined) {
      let newUser = {
        fname: this.newContact.fname,
        lname: this.newContact.lname,
        number: this.newContact.number
      };
      this.phoneBook.push(newUser);
    }
    else {
      this.phoneBook[this.indexEdit].fname = this.newContact.fname;
      this.phoneBook[this.indexEdit].lname = this.newContact.lname;
      this.phoneBook[this.indexEdit].number = this.newContact.number;
    }
    this.isModal = false;
    this.newContact.fname = '';
    this.newContact.lname = '';
    this.newContact.number = '';
  }

  checkInputs(): boolean {
    let key: keyof Contact;
    for (key in this.regExp) {
      if(this.regExp[key].test(this.newContact[key])) {
        this.inputWrong[key] = false;
      }
      else {
        this.inputWrong[key] = true;
        return false;
      }
    }
    return true;
  }

  clearInput(): void {
    this.searchText = '';
  }

  closeModal(): void {
    this.isModal = false;
  }

  clickOverlay(event: MouseEvent): void {
    if((event.target as HTMLDivElement).classList.contains('modal__overlay')) {
      this.closeModal();
    }
  }

}

export interface Contact {
  fname: string;
  lname: string;
  number: string;
}

export type objFields = keyof Contact;
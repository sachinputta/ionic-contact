
import { Component, OnInit } from '@angular/core';
import { Contacts } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.page.html',
  styleUrls: ['./hello-world.page.scss'],
})
export class HelloWorldPage implements OnInit {
  // everybody;

  // tslint:disable-next-line: deprecation
  constructor() {
    // this.everybody = this.contacts.find(['*']);
  }
  // constructor(public callNumber: CallNumber, public contacts: Contacts) {
  //   // this.everybody = this.contacts.find(['*']);
  // }
  // tslint:disable-next-line: variable-name
  // callContact(number: string) {
  //   this.callNumber.callNumber(number, true)
  //     .then(() => console.log('Dialer Launched!'))
  //     .catch(() => console.log('Error launching dialer'));
  // }



  ngOnInit() {
  }

}

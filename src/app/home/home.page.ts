import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  smsText: string;
  requestObject: any = null;
  everybody;
  // tslint:disable-next-line: deprecation
  constructor(private http: HTTP, public contacts: Contacts, public callNumber: CallNumber, public sms: SMS) {
    this.everybody = this.contacts.find(['*']);
  }
  // tslint:disable-next-line: variable-name
  callContact(number: string) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
  }
  getRequest() {
    this.http.get('http://52.66.235.49:7500/getjourneys/?type=ALL', {}, {})
    .then( res => this.requestObject = res.data)
    .catch(err => this.requestObject = err);
  }
//  call() {
// this.contacts.pickContact().then((contact) => {
//   const contactNumber = contact.phoneNumbers[0].value;
//   this.callNumber.callNumber(contactNumber, true).then(
//   (data) => {
//     // alert(JSON.stringify(data));
//     console.log(data);
//   }, (err) => {
//     console.log(err);
//   });

// }, (err) => {
//   console.log(err);
// });
//  }
//  smss() {
//  this.contacts.pickContact().then((contact) => {
//    const contactNumber = contact.phoneNumbers[0].value;
//    const options: SmsOptions = {
//       replaceLineBreaks: false,
//       android: {
//         intent: 'INTENT'
//       }
//     };
//    const message = this.smsText;
//    this.sms.send(contactNumber, message, options).then(
//       (data) => {
//         // alert(JSON.stringify(data));
//        console.log(data);
//       }, (err) => {
//         console.log(err);
//       });

//  }, (err) => {
//   console.log(err);
//   });
//  }

// tslint:disable-next-line: variable-name


}

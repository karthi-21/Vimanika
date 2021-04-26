import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let $: any;
declare let Email: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  quickMsg = new FormGroup({
    qname: new FormControl('', [Validators.required]),
    qemail: new FormControl('', [Validators.required]),
    qmessage: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(): any {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'vimanikatechnovatorz@gmail.com',
      Password : '0544EFDA56510501775FD18AB029E96ACEE4',
      To: 'kkeyan210@gmail.com',
      From: 'vimanikatechnovatorz@gmail.com',
      Subject: this.quickMsg.value.qname + ' has a quick message for you!',
      Body: `Hi there, <br/> I'm ${ this.quickMsg.value.qname } and my mail address is ${ this.quickMsg.value.qemail }. Here's what I wanted to say,
      <br/><br/>
      Message: <b>"${ this.quickMsg.value.qmessage }"<b><br/>
      <br/><br/>Regards,<br/> Vimanika Technovatorz`
    }).then(
      message => {
        console.log(message);
        $('.quick-contact-form').click();
        // this.router.navigate(['/home']);
      }).catch(err => {
        console.log(err);
        // this.router.navigate(['/404']);
      });
  }
}

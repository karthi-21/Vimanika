import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#works-without-images').cubeportfolio({
      filters: '#works-without-images-filters',
      layoutMode: 'masonry',
      defaultFilter: '*',
      animationType: 'scaleSides',
      gapHorizontal: 10,
      gapVertical: 10,
      gridAdjustment: 'responsive',
      mediaQueries: [{
        width: 1500,
        cols: 4,
      }, {
        width: 1100,
        cols: 4,
      }, {
        width: 800,
        cols: 3,
      }, {
        width: 480,
        cols: 1,
        options: {
          gapHorizontal: 15,
          gapVertical: 15,
        }
      }],
      caption: 'zoom',
      displayType: 'fadeIn',
      displayTypeSpeed: 400,
    });
  }

  sendEmail(): void {
    Email.send({
      SecureToken: '6e3ce654-83cb-447e-91b9-6abc4a7bd98c',
      To: 'kkeyan210@gmail.com',
      Cc: ['kkeyan210@gmail.com'],
      From: 'kkeyan210@gmail.com',
      Subject: 'testing from vimanika',
      Body: `Hi there, <br/> I'm <b> me</b> and my email address is mail. The message i want to convey is as follows '<b>message</b>'.<br/><br/>Regards,<br/> display name`
    }).then(
      message => {
        // ${this.user.displayName}
        // ${this.user.email}
        // ${this.messgaeForSender}
        // ${this.user.displayName}`
        // this.subjectForSender = '';
        // this.messgaeForSender = '';
        // this.messageService.add({ severity: 'success', summary: 'Message sent!', detail: 'We will be in touch soon as we can...' });
      }).catch(err => {
        // this.messageService.add({ severity: 'error', summary:
        // 'Message not sent!', detail: 'Sorry, something went wrong, can you try again..' });
      });
  }

}

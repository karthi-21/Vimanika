import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let $: any;
declare let Email: any;

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerFrom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    web: new FormControl(''),
    stDt: new FormControl('', [Validators.required]),
    pos: new FormControl('', [Validators.required]),
    exp: new FormControl(''),
    msg: new FormControl('')
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
    const $input = $('.datepicker').pickadate({
      formatSubmit: 'yyyy/mm/dd',
      // min: [2015, 7, 14],
      // editable: true,
      closeOnSelect: true,
      closeOnClear: false,
    });
    const picker = $input.pickadate('picker');
  }

  sendEmail(): any {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'vimanikatechnovatorz@gmail.com',
      Password : '0544EFDA56510501775FD18AB029E96ACEE4',
      To: 'info2vtz@gmail.com',
      From: 'vimanikatechnovatorz@gmail.com',
      Subject: this.careerFrom.value.name + ' applied for ' + this.careerFrom.value.pos,
      Body: `Hi there, <br/> There was a new candidate applied for a role in our website. Here's all detail he provided in our site.
      <br/><br/>
      Name: <b>${ this.careerFrom.value.name }<b>,<br/>
      Email: <b>${ this.careerFrom.value.email }<b>,<br/>
      Age: <b>${ this.careerFrom.value.age }<b>,<br/>
      Website/Blog: <b>${ this.careerFrom.value.web }<b>,<br/>
      Start Date: <b>${ this.careerFrom.value.stDt }<b>,<br/>
      Position: <b>${ this.careerFrom.value.pos }<b>,<br/>
      Experience: <b>${ this.careerFrom.value.exp }<b>,<br/>
      Message: <b>${ this.careerFrom.value.msg }<b>,<br/>
      <br/><br/>Regards,<br/> Vimanika Technovatorz`
    }).then(
      message => {
        console.log(message);
        this.router.navigate(['/home']);
      }).catch(err => {
        console.log(err);
        this.router.navigate(['/404']);
      });
  }

}

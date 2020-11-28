import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }

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

}

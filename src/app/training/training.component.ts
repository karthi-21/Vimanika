import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.animated').addClass('visible');
  }

}

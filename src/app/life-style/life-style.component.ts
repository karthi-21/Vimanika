import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.scss']
})
export class LifeStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.animated').addClass('visible');
  }

}

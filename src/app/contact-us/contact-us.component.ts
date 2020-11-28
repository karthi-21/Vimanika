import { Component, OnInit } from '@angular/core';
declare let $: any;

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

}

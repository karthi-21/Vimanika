import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#items').cubeportfolio({
      filters: '#filters',
      layoutMode: 'grid',
      defaultFilter: '*',
      animationType: 'quicksand',
      gapHorizontal: 35,
      gapVertical: 30,
      gridAdjustment: 'responsive',
      mediaQueries: [{
        width: 1500,
        cols: 3,
      }, {
        width: 900,
        cols: 3,
      }, {
        width: 640,
        cols: 2,
      }, {
        width: 480,
        cols: 1,
        options: {
          caption: '',
          gapHorizontal: 30,
          gapVertical: 30,
        }
      }]
    });
    $('.animated').addClass('visible');
  }

}

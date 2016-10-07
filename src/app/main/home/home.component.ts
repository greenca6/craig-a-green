import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
      let m: Map<string, boolean>;
  }

  ngOnInit() {
      jQuery('#splash').height(window.innerHeight + 'px');

  }

}

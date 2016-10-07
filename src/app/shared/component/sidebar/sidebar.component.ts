import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cag-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
    @Input() private sidebarCollapsed: boolean;

    constructor() { }

    ngOnInit() {
    }

}

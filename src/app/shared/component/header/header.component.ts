import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'cag-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    @Input() private headerExploded: boolean;
    @Input() private sidebarCollapsed: boolean;
    @Output() private toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    collapse() {
        this.toggle.emit(!this.sidebarCollapsed);
    }

}

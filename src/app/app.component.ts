import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cag-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
    private sidebarCollapsed: boolean = true;
    private headerExploded: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(() => {
            console.log('route...');
            this.headerExploded = this.getHeaderIsExploded();
        });

        jQuery(window).scroll(() => {
            console.log('scroll...');
            this.headerExploded = this.getHeaderIsExploded();
        });
    }

    ngOnDestroy() {
        jQuery(window).off('scroll');
    }

    getHeaderIsExploded(): boolean {
        if (this.router.url !== '/')
            return false;

        let quarterHeight: number = window.innerHeight / 4;

        if (jQuery(window).scrollTop() >= quarterHeight)
            this.headerExploded = true;
        else
            this.headerExploded = false;
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cag-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent implements OnInit {
    private sidebarCollapsed: boolean = true;
    private headerExploded: boolean = true;

    constructor(private router: Router) { }

    toggleCollapse(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

    ngOnInit() {
        this.router.events.subscribe((route) => this.headerExploded = (route.url === '/'));

        // Explode the header if the scroll location is past the first 1/4 of the window,
        // and the user is on the home page
        jQuery(window).on('scroll', () => {
            if (this.router.url !== '/')
                return false;

            let quarterHeight: number = window.innerHeight / 4;
            this.headerExploded = jQuery(window).scrollTop() <= quarterHeight;
        });
    }
}

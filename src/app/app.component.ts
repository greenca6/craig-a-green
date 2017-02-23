import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cag-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    private sidebarCollapsed: boolean = true;
    private headerExploded: boolean = true;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((route) => {
            this.headerExploded = (route.url === '/');
        });

        // Scroll watcher
        jQuery(window).on('scroll', () => {
            if (this.router.url !== '/')
                return false;

            let quarterHeight: number = window.innerHeight / 4;
            this.headerExploded = jQuery(window).scrollTop() <= quarterHeight;
        });
    }

    toggleCollapse(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
}

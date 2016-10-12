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
    private scrolledToTop: boolean = true;

    constructor(private router: Router) { }

    isAtTop(): boolean {
        return jQuery(window).scrollTop() === 0;
    }

    ngOnInit() {
        this.router.events.subscribe((route) => {
            this.headerExploded = (route.url === '/');
            this.scrolledToTop = (route.url === '/') ? false : this.isAtTop();
        });

        // Scroll watcher
        jQuery(window).on('scroll', () => {
            this.scrolledToTop = (this.router.url === '/') ? false : this.isAtTop();

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

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cag-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent {
    @Input() baseRoute: string;

    private crumbs: string[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        if (!this.baseRoute || this.baseRoute.indexOf('/') !== 0)
            throw new Error('Invalid base route: route can not be blank, and must start with \'/\'');

        // Add the base crumb
        this.crumbs.push(this.baseRoute);

        this.router.events.subscribe(route => {
            // Do something
        });
    }

    onCrumbClick(crumb: string) {
        this.router.navigate([crumb]);
    }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Breadcrumb } from '../../data/breadcrumb';

@Component({
    selector: 'cag-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent {
    @Input() baseRoute: string;
    @Input() labelMap: Map<string, string>;

    private baseCrumb: Breadcrumb;
    private childrenCrumbs: Breadcrumb[];


    constructor(private router: Router) { }

    rebuildRoutes(url: string) {
        let routes: string[] = url.slice(1).split('/');

        if (routes.length === 0 || routes[0] !== this.baseRoute)
            throw new Error('Attempted to rebuild route hierarchy that did not start with the specified base route. ' +
                'Expected: ' + this.baseRoute + ' Actual: ' + routes[0]);


    }

    /**
     * Helper method that returns a breadcrumb instance based on the route. Uses the label map
     * to find a label associated with a url, and if none is found, it will parse the url to try and
     * build a readable label.
     *
     * @param route
     * @returns {Breadcrumb}
     */
    getBreadCrumb(route: string): Breadcrumb {
        let label = route.slice(1).split('-').join(' ').titleize();

        if (this.labelMap && this.labelMap.get(route))
            label = this.labelMap.get(route);

        return new Breadcrumb(label, route);
    }

    ngOnInit() {
        if (this.baseRoute.indexOf('/') !== 0)
            throw new Error('Invalid base route: ' + this.baseRoute);

        // Add the base crumb that the user can always go back to
        this.baseCrumb = this.getBreadCrumb(this.baseRoute);

        // Listen for route changes, only concerning route changes below baseRoute
    }
}

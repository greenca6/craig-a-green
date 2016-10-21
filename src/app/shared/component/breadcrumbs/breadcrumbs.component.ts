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
    @Input() childrenCrumbs: Breadcrumb;

    private baseCrumb: Breadcrumb;


    constructor(private router: Router) { }

    rebuildRoutes(endCrumbUrl: string) {

    }

    getBreadCrumb(route: string): Breadcrumb {
        return null;
    }

    ngOnInit() {

    }
}

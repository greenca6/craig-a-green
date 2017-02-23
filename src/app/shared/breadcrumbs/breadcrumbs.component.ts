import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Breadcrumb } from './breadcrumb';


@Component({
  selector: 'cag-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  @Input() baseRoute: string;
  @Input() labelMap: Map<string, string>;

  private baseCrumb: Breadcrumb;
  private childrenCrumbs: Breadcrumb[];

  private routeSubscription: Subscription;


  constructor(private router: Router) { }

  /**
   * Rebuilds the child breadcrumbs based on the url given. Assumes that the route passed in starts with
   * the base route.
   *
   * @param url
   */
  rebuildChildCrumbs(url: string) {
    let routes: string[] = url.slice(1).split('/');

    if (routes.length === 0 || routes[0] !== this.baseRoute.slice(1))
      throw new Error('Attempted to rebuild route hierarchy that did not start with the specified base route. ' +
        'Expected: ' + this.baseRoute + ' Actual: ' + routes[0]);

    // Reset the children crumbs to rebuild
    this.childrenCrumbs = [];

    // Create the child crumbs, skipping the base crumb
    for (let i = 1; i < routes.length; i++)
      this.childrenCrumbs.push(this.getBreadCrumb(routes[i]));
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
    let label = route.indexOf('/') === 0 ? route.slice(1) : route;
    label = label.split('-').join(' ').titleize();

    if (this.labelMap && this.labelMap.get(route))
      label = this.labelMap.get(route);

    return new Breadcrumb(label, route);
  }

  ngOnInit() {
    if (this.baseRoute.indexOf('/') !== 0)
      throw new Error('Invalid base route: ' + this.baseRoute);

    // Add the base crumb that the user can always go back to
    this.baseCrumb = this.getBreadCrumb(this.baseRoute);

    // Listen for route changes, only concerning route changes at or below baseRoute
    this.routeSubscription = this.router.events.subscribe((route) => {
      if (route.url.startsWith(this.baseRoute))
        this.rebuildChildCrumbs(route.url);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}

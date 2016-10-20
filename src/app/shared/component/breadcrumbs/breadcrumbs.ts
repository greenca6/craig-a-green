import { Router } from '@angular/router';

export class Breadcrumbs {
    public crumbs: Map<string, string> = new Map<string, string>();

    constructor(private baseurl: string, private router: Router) {

    }


}

import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../../../core/';


@Component({
    selector: 'cag-blog-list',
    templateUrl: 'blog-list.component.html',
    styleUrls: ['blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    @Input() blogs: Blog[];


    constructor() { }

    ngOnInit() { }
}

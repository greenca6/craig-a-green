import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../../../shared/data/blog';

@Component({
    selector: 'cag-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
    @Input() blogs: Blog[];


    constructor() { }

    ngOnInit() { }
}

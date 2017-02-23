import { Component, OnInit } from '@angular/core';

import { BlogService, BlogTopic } from '../../core/';


@Component({
    selector: 'cag-blog-home',
    templateUrl: './blog-home.component.html',
    styleUrls: ['blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {
    public topics: BlogTopic[];

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.blogService.getBlogTopics().subscribe(topics => this.topics = topics);
    }
}

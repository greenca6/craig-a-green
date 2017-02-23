import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BlogService, Blog, BlogTopic } from '../../core/';


@Component({
    selector: 'cag-blog-topic',
    templateUrl: './blog-topic.component.html',
    styleUrls: ['blog-topic.component.scss']
})
export class BlogTopicComponent implements OnInit {
    private topic: BlogTopic;
    private blogs: Blog[];

    private loading: boolean = true;

    constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.blogService.getBlogTopicByRelUrl(params['topicUrl'])
                .subscribe(topic => {
                    this.topic = topic;

                    this.blogService.getBlogsByTopic(this.topic).subscribe(blogs => {
                        this.blogs = blogs;
                        this.loading = false;
                    });
                });
        });
    }
}

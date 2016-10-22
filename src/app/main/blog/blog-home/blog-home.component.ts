import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/service/blog.service';
import {BlogTopic} from "../../../shared/data/blog-topic";

@Component({
    selector: 'cag-blog-home',
    templateUrl: './blog-home.component.html',
    styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit {
    public topics: BlogTopic[];

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.blogService.getBlogTopics().subscribe(topics => this.topics = topics);
    }
}

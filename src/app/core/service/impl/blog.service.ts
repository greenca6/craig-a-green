import { Injectable } from '@angular/core';

import { IBlogService } from '../iblog.service';

import { Observable } from 'rxjs';
import { Blog, BlogTopic } from '../../data/';


var blogTopics: BlogTopic[] = require('./blog-topics.json');
var blogs: Blog[] = require('./blogs.json');

@Injectable()
export class BlogService implements IBlogService {

  getBlogTopics(): Observable<BlogTopic[]> {
    return Observable.of(blogTopics);
  }

  getBlogTopicByRelUrl(relUrl: string): Observable<BlogTopic> {
    return Observable.of(blogTopics.find((topic) => topic.relUrl === relUrl));
  }

  getBlogsByTopicId(topicId: number): Observable<Blog[]> {
    return Observable.of(blogs.filter((blog) => blog.topicId === topicId));
  }
}

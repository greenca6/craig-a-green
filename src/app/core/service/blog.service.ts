import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from '../data/blog';
import { BlogTopic } from '../data/blog-topic';


@Injectable()
export class BlogService {

  getBlogTopics(): Observable<BlogTopic[]> {
    let topic = new BlogTopic();
    topic.id = 1;
    topic.relUrl = 'software-development';
    topic.name = 'Software Development';
    topic.description = 'Focusing primarily on web development';
    topic.previewImage = 'keyboard.jpeg';

    return Observable.of([topic]).delay(1500);
  }

  getBlogTopicByRelUrl(relUrl: string): Observable<BlogTopic> {
    let topic = new BlogTopic();
    topic.id = 1;
    topic.relUrl = 'software-development';
    topic.name = 'Software Development';
    topic.description = 'Focusing primarily on web development';
    topic.previewImage = 'keyboard.jpeg';

    return Observable.of(topic).delay(1000);
  }

  getBlogsByTopic(topic: BlogTopic): Observable<Blog[]> {
    let blogs: Blog[] = [];
    let b: Blog = new Blog();

    b.id = 1;
    b.title = 'Test Blog';
    b.createdOn = new Date();
    b.topicId = 1;
    b.relUrl = 'test-blog';

    blogs.push(b);

    return Observable.of(blogs).delay(1500);
  }
}

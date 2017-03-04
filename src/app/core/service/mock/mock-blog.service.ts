import { Injectable } from '@angular/core';

import { IBlogService } from '../iblog.service';

import { Observable } from 'rxjs';
import { Blog, BlogTopic } from '../../data/';


@Injectable()
export class MockBlogService implements IBlogService {

  private blogTopics: BlogTopic[] = [];
  private blogs: Blog[] = [];

  constructor() {
    // Create the mock topics and blogs
    for (let i = 0; i < 8; i++) {
      this.blogTopics.push({
        id: i + 1,
        description: 'Description for blog topic ' + (i + 1),
        previewImage: 'keyboard.jpeg',
        name: 'Blog Topic ' + (i + 1),
        relUrl: 'blog-topic-' + (i + 1)
      });

      // Create in between 1 and 20 mock blogs for this topic
      for (let j = 0; j < Math.ceil(Math.random() * 20); j++) {
        let createdOn = new Date();

        // Set back the date 0-2 years on a random month and day
        createdOn.setFullYear(createdOn.getFullYear() - Math.floor(Math.random() * 3));
        createdOn.setDate(Math.ceil(Math.random() * 27));
        createdOn.setMonth(Math.ceil(Math.random() * 11));

        this.blogs.push({
          id: i + 1,
          title: 'Blog post ' + (j + 1) + ', topic ' + (i + 1),
          createdOn: createdOn,
          topicId: i + 1,
          relUrl: 'blog-post-' + (j + 1),
          content: 'Some content for blog post ' + (j + 1) + ', topic ' + (i + 1)
        });
      }
    }
  }

  getBlogTopics(): Observable<BlogTopic[]> {
    return Observable.of(this.blogTopics);
  }

  getBlogTopicByRelUrl(relUrl: string): Observable<BlogTopic> {
    return Observable.of(this.blogTopics.find(topic => topic.relUrl === relUrl));
  }

  getBlogsByTopicId(topicId: number): Observable<Blog[]> {
    return Observable.of(this.blogs.filter(blog => blog.topicId === topicId));
  }
}

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
        topic.image = 'keyboard.jpeg';

        return Observable.of([topic]).delay(1500);
    }

    getBlogTopicByRelUrl(relUrl: string): Observable<BlogTopic> {
        let topic = new BlogTopic();
        topic.id = 1;
        topic.relUrl = 'software-development';
        topic.name = 'Software Development';
        topic.description = 'Focusing primarily on web development';
        topic.image = 'keyboard.jpeg';

        return Observable.of(topic).delay(1000);
    }

    getBlogsByTopic(topic: BlogTopic): Observable<Blog[]> {
        return Observable.of([]).delay(1500);
    }
}

import { Blog, BlogTopic } from '../data/';
import { Observable } from 'rxjs/Observable';


export interface IBlogService {
  getBlogTopics(): Observable<BlogTopic[]>;
  getBlogTopicByRelUrl(relUrl: string): Observable<BlogTopic>;
  getBlogsByTopicId(topicId: number): Observable<Blog[]>;
}

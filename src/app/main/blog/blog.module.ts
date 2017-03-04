import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogTopicComponent } from './blog-topic/blog-topic.component';
import { BlogListComponent } from './blog-topic/blog-list/blog-list.component';


@NgModule({
  imports: [SharedModule, BlogRoutingModule],
  declarations: [BlogComponent, BlogHomeComponent, BlogTopicComponent, BlogListComponent],
})
export class BlogModule { }

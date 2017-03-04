import { NgModule } from '@angular/core';

import { BlogService } from './service/impl/blog.service';
import { MockBlogService } from './service/mock/mock-blog.service';

import { environment } from '../../environments/environment';


let providers = [];

if (environment.test)
  providers.push({ provide: BlogService, useClass: MockBlogService });
else
  providers.push(BlogService);

@NgModule({
  providers: providers
})
export class CoreModule { }

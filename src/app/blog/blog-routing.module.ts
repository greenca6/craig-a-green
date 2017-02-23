import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogTopicComponent } from './blog-topic/blog-topic.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', component: BlogHomeComponent },
      { path: ':topicUrl', component: BlogTopicComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

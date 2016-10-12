import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, AboutComponent, BlogComponent, ContactComponent, ProfileComponent } from "./main";
import {SoftwareBlogComponent} from "./main/blog/software-blog/software-blog.component";
import {BlogHomeComponent} from "./main/blog/blog-home/blog-home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'blog',
        component: BlogComponent,
        children: [
            { path: '', component: BlogHomeComponent },
            { path: 'software', component: SoftwareBlogComponent }
        ]
    },
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

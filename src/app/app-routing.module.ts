import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, AboutComponent, BlogComponent, ContactComponent,
    ProfileComponent, BlogTopicComponent, BlogHomeComponent } from "./main";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'blog',
        component: BlogComponent,
        children: [
            { path: '', component: BlogHomeComponent },
            { path: ':topicUrl', component: BlogTopicComponent }
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogHomeComponent,
    BlogTopicComponent,
    BlogListComponent,
    ContactComponent,
    ProfileComponent } from './main';

import { BreadcrumbsComponent, SpinnerComponent } from './shared/component';

import { BlogService } from './shared/service';

import './shared/util/string-utils';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        BlogComponent,
        BlogHomeComponent,
        BlogTopicComponent,
        BlogListComponent,
        ContactComponent,
        ProfileComponent,
        BreadcrumbsComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    providers: [BlogService],
    bootstrap: [AppComponent]
})
export class AppModule { }

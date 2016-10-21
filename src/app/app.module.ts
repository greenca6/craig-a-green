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
    SoftwareBlogComponent,
    ContactComponent,
    ProfileComponent } from './main';

import { BreadcrumbsComponent } from './shared/component';

import './shared/util/string-utils';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        BlogComponent,
        BlogHomeComponent,
        SoftwareBlogComponent,
        ContactComponent,
        ProfileComponent,
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

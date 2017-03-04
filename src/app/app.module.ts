import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent, AboutComponent, ContactComponent,ProfileComponent } from './main/';

import { BlogModule } from './main/blog/';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

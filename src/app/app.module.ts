import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent, HeaderComponent, FooterComponent } from './shared/component';
import { HomeComponent, AboutComponent, BlogComponent, ContactComponent, ProfileComponent } from './main';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        BlogComponent,
        ContactComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

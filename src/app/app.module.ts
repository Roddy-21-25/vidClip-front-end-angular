import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Root_Components/navbar/navbar.component';
import { FooterComponent } from './Root_Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { SearchVideosModule } from './Search_Videos/search-videos.module';
import { HomeModule } from './Home/home.module';
import { NotFoundPageModule } from './Not_Found_Page/not-found-page.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchVideosModule,
    HomeModule,
    NotFoundPageModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

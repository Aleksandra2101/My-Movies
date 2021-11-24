import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MovieListComponent } from './pages/home-page/movie-list/movie-list.component';

import { MovieThumbnailComponent } from './pages/home-page/movie-thumbnail/movie-thumbnail.component';
import { MovieService } from './movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {MovieCreateEditComponent} from "./pages/create-edit-movie/movie-create-edit.component";
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ChangecolorDirective } from './pages/movie-detail/changecolor.directive';






@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieCreateEditComponent,
    HeaderComponent,
    MovieDetailComponent,
    ChangecolorDirective
   
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

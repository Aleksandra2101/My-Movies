import { Component, OnInit } from '@angular/core';

import {Movie} from '../../../movies.model';
import { MovieService } from '../../../movie.service';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService:MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    })

  }

}

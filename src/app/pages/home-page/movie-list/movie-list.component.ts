import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import {Movie} from '../../../movies.model';
import { MovieService } from '../../../movie.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})




export class MovieListComponent implements OnInit {


  movies: Movie[] = [];

  constructor(private movieService:MovieService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    })

 
  }



}



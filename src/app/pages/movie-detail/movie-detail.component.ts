import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Movie} from 'src/app/movies.model';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movies: Movie[] = [];
   movie:any;
  constructor(private movieService:MovieService, private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    this.movieService.getMovie( this.route.snapshot.params['movieId']).subscribe((movie:any) => {
      this.movie = movie;
       })

    
  }

}

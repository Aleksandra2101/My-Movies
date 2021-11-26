import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Movie} from '../../../movies.model';
import { MovieService } from '../../../movie.service';
import { first } from 'rxjs/operators';
import {AuthenticationService} from "../../../auth/authentication.service";
import {UserService} from "../../../auth/user.service";
import {User} from "../../../auth/user.model";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})

export class MovieListComponent implements OnInit {
  users: User[] = [];
  filterMovie:string;
  page:number = 1;
  movies: Movie[] = [];
  constructor(private movieService:MovieService, private route:ActivatedRoute,private userService: UserService ) {}

  onNext() {
    this.page++;
    this.movieService.getMovies(this.page).subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    })
  }
  onPrevious() {
    if(this.page > 1) this.page--;
    this.movieService.getMovies(this.page).subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    })
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    })



  }



}



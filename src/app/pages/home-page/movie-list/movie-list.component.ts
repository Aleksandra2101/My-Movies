import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../../../auth/user.model';
import { MovieService } from '../../../movie.service';
import { Movie } from '../../../movies.model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  users: User[] = [];
  filterMovie: string;
  page: number = 1;
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  onNext() {
    this.page++;
    this.loadMovies(this.page)
  }
  onPrevious() {
    if (this.page > 1) this.page--;
    this.loadMovies(this.page)
  }

  ngOnInit() {
   this.loadMovies(this.page)
  }
  loadMovies(page:number):void{
    this.movieService.getMovies(page).pipe(take(1)).subscribe((movies: any) => {
      console.log(movies);
      this.movies = movies;
    });
  }
}

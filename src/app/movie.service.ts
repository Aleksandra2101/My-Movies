import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Movie} from './movies.model'

@Injectable()
export class MovieService {
    movies: Movie[] = [];
    constructor(private http:HttpClient){}

  getMovies() {
    return this.http.get(' http://localhost:3000/posts')
  }
  getMovie(movieId:string) {
    return this.http.get(`http://localhost:3000/posts/${movieId}`)
  }
}

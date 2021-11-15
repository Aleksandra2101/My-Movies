import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Movie} from './movies.model'

@Injectable()
export class MovieService {
    movies: Movie[] = [];
    constructor(private http:HttpClient){} 

    getMovies() {
        this.http.get(' http://localhost:3000/movies').subscribe(movies=> {
            console.log(movies);
        })
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movies.model'

@Injectable()
export class MovieService {
  movies: Movie[] = [];
  constructor(private http: HttpClient) { }

  getMovies(page:number=1) {
    return this.http.get(`http://localhost:3000/posts?_page=${page}&_limit=5`)
  }
  getMovie(movieId: string) {
    return this.http.get(`http://localhost:3000/posts/${movieId}`)
  }

  postMovie(movie:Movie):Observable<any> {
     return this.http.post(' http://localhost:3000/posts', movie)
  }
  editMovie(movieId:string ,movie:Movie):Observable<any>{
    return this.http.patch(`http://localhost:3000/posts/${movieId}`,
    movie)

  }

  deleteMovie(movieId: number) {
    return this.http.delete(`http://localhost:3000/posts/${movieId}`)
  }
}

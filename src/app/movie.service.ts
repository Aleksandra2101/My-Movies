import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './movies.model';

const apiUrl = environment.apiUrl
@Injectable({ providedIn: 'root' })
export class MovieService {
 
  constructor(private http: HttpClient) {}

  getMovies(page: number = 1):Observable<Movie[]> {
    return this.http.get<Movie[]>(`${apiUrl}/posts?_page=${page}&_limit=5`);
  }
  getMovie(movieId: string) {
    return this.http.get(`${apiUrl}/posts/${movieId}`);
  }

  postMovie(movie: Movie): Observable<any> {
    return this.http.post(`${apiUrl}/posts`, movie);
  }
  editMovie(movieId: string, movie: Movie): Observable<any> {
    return this.http.patch(`${apiUrl}/posts/${movieId}`, movie);
  }

  deleteMovie(movieId: number) {
    return this.http.delete(`${apiUrl}/posts/${movieId}`);
  }
}

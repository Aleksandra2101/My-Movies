import { Component, OnInit } from '@angular/core';

import {Movie} from '../movies.model';
import { MovieService } from '../movie.service';
@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  providers: [MovieService]
})
export class HomeComponentComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService:MovieService) {}

  ngOnInit() {
    
   
    
  }

}

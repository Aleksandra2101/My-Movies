import { Component, OnInit, Input } from '@angular/core';

import {Movie} from '../../../movies.model';
import { MovieService } from '../../../movie.service';
@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
  providers: [MovieService]
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: any;


  ngOnInit() {

  }

}

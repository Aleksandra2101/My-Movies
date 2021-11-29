import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../../movies.model';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
})
export class MovieThumbnailComponent {
  @Input() movie: Movie;

}

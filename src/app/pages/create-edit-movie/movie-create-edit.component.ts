import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Movie} from 'src/app/movies.model';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { MovieService } from 'src/app/movie.service';
@Component({
  selector: 'movie-create-edit',
  templateUrl: './movie-create-edit.component.html',
  styleUrls: ['./movie-create-edit.component.css'],
  providers: [MovieService]
})
export class MovieCreateEditComponent implements OnInit {
  movies: Movie[] = [];
  rates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  editingMode: boolean =false;
  createMode: boolean = true;
  constructor(private movieService:MovieService, private formBuilder: FormBuilder, private route:ActivatedRoute) {}

  movieForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: [''],
    rate: [null],
    actors: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get actors() {
    return this.movieForm.get('actors') as FormArray;
  }


  addActors() {
    this.actors.push(this.formBuilder.control(''));
  }

  onSubmit() {
    
    
  }
  ngOnInit() {
    if(this.route.snapshot.params['movieId']) {
      this.movieService.getMovie( this.route.snapshot.params['movieId']).subscribe((movieInfo:any) => {
          this.movieForm.patchValue({
            title: movieInfo.title,
            description: movieInfo.description,
          });
          movieInfo.actors.forEach((actor:any) => {
            this.actors.push(this.formBuilder.control(actor));
          })
          this.editingMode = true;
          this.createMode = false;
        },
        error => {
        console.log(error)
        })
    }
    this.editingMode = false;
    this.createMode = true;
  }

}

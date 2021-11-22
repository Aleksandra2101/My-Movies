import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Movie} from 'src/app/movies.model';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
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
  
  constructor(private movieService:MovieService, private formBuilder: FormBuilder, private route:ActivatedRoute,private router:Router) {}

  movieForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: [''],
    rate: [null],
    duration: [null],
    imageUrl: ['', Validators.required],
    actors: this.formBuilder.array([
      this.formBuilder.control('')
    ])
   });
    submited:boolean = false;
    movieId:number = 0;

    ngOnInit() {
      if(this.route.snapshot.params['movieId']) {
        this.movieId = this.route.snapshot.params['movieId']
        this.movieService.getMovie( this.route.snapshot.params['movieId']).subscribe((movieInfo:any) => {
          this.movieForm.patchValue({
            title: movieInfo.title,
            description: movieInfo.description,
            rate:movieInfo.rate,
            duration:movieInfo.duration,
            imageUrl:movieInfo.imageUrl
            
          });
          movieInfo.actors.forEach((actor:any) => {
            this.actors.push(this.formBuilder.control(actor));
          })
          
          
        },
        error => {
          console.log(error)
        })
      }
      
    }
    
    
    get actors() {
      return this.movieForm.get('actors') as FormArray;
    }
  
    addActors() {
      this.actors.push(this.formBuilder.control(''));
    }
  
    onSubmit() {
      this.submited = true;
      if (this.movieForm.invalid){
        this.movieForm.markAllAsTouched();
        return
      }
      
      if(this.route.snapshot.params['movieId']){
        this.movieService.editMovie(this.route.snapshot.params['movieId'],this.movieForm.value).subscribe(response=>{
          this.router.navigateByUrl('/home')
        })
      } else{ this.movieService.postMovie(this.movieForm.value).subscribe(response=>{
        this.router.navigateByUrl('/home');
      })}
  
     
  
      
      
       
      
    }
    onDeleteMovie() {
      this.movieService.deleteMovie(this.movieId).subscribe(res =>{
        alert('movie has been removed')
        this.router.navigateByUrl('/home');
      })
      
  }

}

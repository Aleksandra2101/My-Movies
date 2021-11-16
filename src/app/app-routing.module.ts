import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./pages/home-page/movie-list/movie-list.component";
import {MovieCreateEditComponent} from "./pages/create-edit-movie/movie-create-edit.component";


const routes: Routes = [
  { path: 'home', component: MovieListComponent },
  { path: 'create', component: MovieCreateEditComponent },
  { path: 'edit-movie/:movieId', component: MovieCreateEditComponent },
  //{  path: 'movie/:movieId', component: MovieDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

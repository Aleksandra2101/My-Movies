import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./pages/home-page/movie-list/movie-list.component";
import {MovieCreateEditComponent} from "./pages/create-edit-movie/movie-create-edit.component";
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  { path: 'home', component: MovieListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: MovieCreateEditComponent, canActivate: [AuthGuard] },
  { path: 'edit-movie/:movieId', component: MovieCreateEditComponent, canActivate: [AuthGuard]  },
  {  path: 'movie/:movieId', component: MovieDetailComponent, canActivate: [AuthGuard]  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

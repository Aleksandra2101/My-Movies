import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthenticationService} from "./authentication.service";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService]
})
export class AuthRoutingModule { }

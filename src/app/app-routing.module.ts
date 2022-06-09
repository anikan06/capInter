import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/app',
  pathMatch: 'full'
},
{
  path: 'app',
  component: UserDetailsComponent
},
{
  path: 'api',
  component: ApiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

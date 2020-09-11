import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {path:'user', component:UserComponent},
  {path: 'about', component:AboutComponent},
  {path: 'repository', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GenreComponent } from './components/genre/genre.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'genre/:genre',component:GenreComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { SeriesComponent } from './views/series/series.component';
import { MoviesComponent } from './views/movies/movies.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: "movies/create",
    component: MovieCreateComponent,
  },
  {
    path: "movies/update/:id",
    component: MovieUpdateComponent,
  },
  {
    path: "movies/delete/:id",
    component: MovieDeleteComponent,
  },
  {
    path: "series",
    component: SeriesComponent,
  },
  {
    path: "series/create",
    component: SerieCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

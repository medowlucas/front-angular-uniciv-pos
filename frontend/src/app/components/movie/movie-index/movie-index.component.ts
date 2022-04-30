import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {

  movies: Movie[];
  displayedColumns =  ["id", "title", "director", "genres", "year", "actions"];

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.index().subscribe(movies =>{
      this.movies = movies;
    })
  }

}

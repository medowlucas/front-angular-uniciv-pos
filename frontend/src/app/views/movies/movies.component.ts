import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToMovieCreate(){
    this._router.navigate(["/movies/create"])
  }

}

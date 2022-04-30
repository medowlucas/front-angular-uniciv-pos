import { MensagemService } from './../../shared/mensagem.service';
import { Router } from '@angular/router';
import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  arrayAnos = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
  
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(private _movieService: MovieService,
    private _router: Router,
    private _messagemService: MensagemService) { }

  ngOnInit(): void {
  }

  createMovie(): void{
    this._movieService.create(this.movie).subscribe(()=>{
      this._messagemService.showMessage("Filme Adicionado com Sucesso")
      this._router.navigate(["/movies"]);
    });
  }

  cancel(): void{
    this._messagemService.showMessage("Cancelado")
    this._router.navigate(["/movies"]);
  }

}

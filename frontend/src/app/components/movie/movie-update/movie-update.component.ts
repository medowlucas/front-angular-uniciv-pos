import { Movie } from './../movie.model';
import { MensagemService } from './../../shared/mensagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  arrayAnos = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
  
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messagemService: MensagemService) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    this._movieService.getById(id).subscribe(movie=>{
      this.movie = movie;
    })
  }

  updateMovie(){
    return this._movieService.update(this.movie).subscribe(movie=>{
      this._messagemService.showMessage("Filme Atualizado com Sucesso!");
      this._router.navigate(["/movies"])
    })
  }

  cancel(){
    this._router.navigate(["/movies"])
  }

}

import { MensagemService } from './../../shared/mensagem.service';
import { Router } from '@angular/router';
import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  createForm: FormGroup;

  constructor(private _movieService: MovieService,
    private _router: Router,
    private _messagemService: MensagemService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      title: ["", [Validators.required]],
      director: ["", [Validators.required]],
      year: ["2010", [Validators.required]],
      genres: ["", [Validators.required]],
    })
  }

  createMovie(): void{
    if(this.createForm.valid) {
      this._movieService.create(this.createForm.value).subscribe(()=>{
        this._messagemService.showMessage("Filme Adicionado com Sucesso");
        this._router.navigate(["/movies"]);
      });
    }  
  }

  cancel(): void{
    this._messagemService.showMessage("Cancelado", true);
    this._router.navigate(["/movies"]);
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.createForm.controls[control].hasError(error)
  };
}

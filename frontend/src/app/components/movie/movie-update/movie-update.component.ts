import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  updateForm: FormGroup;
  private id: string;
  
  constructor(private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messagemService: MensagemService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateFormCreator();
    this.id = this._route.snapshot.paramMap.get("id");
    this._movieService.getById(this.id).subscribe(movie=>{
      this.updateForm.patchValue(movie);
    })
  }

  updateFormCreator() {
    this.updateForm = this._formBuilder.group( {
      title: ["", [Validators.required]],
      director: ["", [Validators.required]],
      year: ["", [Validators.required]],
      genres: ["", [Validators.required]],
    })
  }

  updateMovie() {
    if(this.updateForm.valid) {
      return this._movieService.update(this.updateForm.value, this.id).subscribe(movie=>{
        this._messagemService.showMessage("Filme Atualizado com Sucesso!");
        this._router.navigate(["/movies"])
      });
    }
  }

  cancel() {
    this._messagemService.showMessage("Cancelado", true);
    this._router.navigate(["/movies"])
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.updateForm.controls[control].hasError(error)
  };

}

import { MensagemService } from './../shared/mensagem.service';
import { Movie } from './movie.model';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private pipeTratamentoError = pipe(
    map((obj) => obj),
    catchError( (e) => this.handleError(e))
    );

  constructor(private _http: HttpClient,
    private _mensagemService: MensagemService) { }

  create(movie: Movie): Observable<Movie>{
    const URI = `${API}/movies`;
    return this.pipeTratamentoError(this._http.post<Movie>(URI, movie));
  }

  index(): Observable<Movie[]>{
    const URI = `${API}/movies`;
    return this.pipeTratamentoError(this._http.get<Movie[]>(URI));
  }

  getById(id: string): Observable<Movie>{
    const URI = `${API}/movies/${id}`;
    return this.pipeTratamentoError(this._http.get<Movie>(URI));
  }

  delete(id: string): Observable<Movie>{
    const URI = `${API}/movies/${id}`;
    return this.pipeTratamentoError(this._http.delete<Movie>(URI));
  }

  update(movie: Movie, id?: string): Observable<Movie>{
    const ID = movie.id? movie.id : id;
    const URI = `${API}/movies/${ID}`;
    return this.pipeTratamentoError(this._http.put<Movie>(URI, movie));
  }

  handleError(error: any): Observable<any> {
    let errorMessage;

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.errror.message;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }

    this._mensagemService.showMessage(errorMessage, true);

    return EMPTY;
  }
  
}

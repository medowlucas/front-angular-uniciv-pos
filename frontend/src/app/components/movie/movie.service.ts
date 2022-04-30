import { Movie } from './movie.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  create(movie: Movie): Observable<Movie>{
    return this._http.post<Movie>(`${API}/movies`, movie);
  }

  index(): Observable<Movie[]>{
    return this._http.get<Movie[]>(`${API}/movies`);
  }

  getById(id: string): Observable<Movie>{
    return this._http.get<Movie>(`${API}/movies/${id}`);
  }

  delete(id: string): Observable<Movie>{
    return this._http.delete<Movie>(`${API}/movies/${id}`);
  }

  update(movie: Movie): Observable<Movie>{
    return this._http.put<Movie>(`${API}/movies/${movie.id}`, movie);
  }
}

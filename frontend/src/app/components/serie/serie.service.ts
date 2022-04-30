import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie.model';
import { Injectable } from '@angular/core';

import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private _http: HttpClient) { }

  create(serie: Serie): Observable<Serie>{
    return this._http.post<Serie>(`${API}/series`, serie);
  }

}

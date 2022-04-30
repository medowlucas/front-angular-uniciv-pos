import { Serie } from './../serie.model';
import { SerieService } from './../serie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css']
})
export class SerieCreateComponent implements OnInit {

  serie: Serie = {
    title: "Nome da Série",
    director: "Nome do Diretor",
    year: "2022",
    genres: "Terror",
  }

  constructor(private _router: Router,
    private _serieService: SerieService) { }

  ngOnInit(): void {
  }

  createSerie(): void{
    this._serieService.create(this.serie).subscribe(()=>{
      this._router.navigate(["/series"]);
    });
  }

  cancel(): void{
    this._router.navigate(["/series"]);
  }

}

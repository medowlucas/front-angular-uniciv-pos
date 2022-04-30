import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

 navigateToSerieCreate(){
    this._router.navigate(["/series/create"])
  }

}

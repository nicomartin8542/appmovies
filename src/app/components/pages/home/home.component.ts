import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { PeliculasService } from '../../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  date = new Date().getFullYear().toString();
  fechaDesde = `${this.date}-01-01`;
  fechaHasta = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  peliculasActuales: any[] = [];
  peliculasPopulares: any[] = [];
  peliculasNinos: any[] = [];

  constructor(private datePipe: DatePipe,
    private _ps: PeliculasService) { }

  ngOnInit(): void {
    this.peliActuales();
    this.peliPopulares();
    this.peliNinos();
  }

  peliActuales() {
    this._ps.peliculasActuales(this.fechaDesde, this.fechaHasta).subscribe(resp => {
      this.peliculasActuales = resp;
    });
  }

  peliPopulares() {
    this._ps.buscarPeliculasPolulares().subscribe(resp => {
      this.peliculasPopulares = resp;
    });
  }

  peliNinos() {
    this._ps.buscarPeliculaNinos().subscribe(resp => {
      this.peliculasNinos = resp;
    });
  }
}

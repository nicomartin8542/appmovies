import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  termino: string;
  id: number;
  page: string;
  constructor(private router: ActivatedRoute,
    private route: Router,
    private _ps: PeliculasService) {
    //extraigo parametros de la url
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.page = this.router.snapshot.paramMap.get('page');
    //guardo parametros opcionales
    this.termino = this.router.snapshot.queryParamMap.get('termino');
    //llamo servicio para traer datos de la pelicula
    this._ps.buscarPeliculaId(this.id).subscribe(resp => { this.pelicula = resp; });
  }

  ngOnInit(): void { }

  regresar() {
    this.route.navigate([this.page], { queryParams: { termino: this.termino } });
  }

}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  termino: string;

  constructor(public _sp: PeliculasService,
    private router: ActivatedRoute) {

    this.router.queryParams.subscribe(params => {
      if (params['termino']) {
        this.termino = params['termino'];
        this.buscar();
      }
    });
  }

  buscar() {
    if (this.termino.length === 0) {
      return;
    }
    this._sp.buscarPelicula(this.termino).subscribe();
    console.log(this._sp.peliculas);
  }

}

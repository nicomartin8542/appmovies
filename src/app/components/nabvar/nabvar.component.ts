import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styles: [
  ]
})
export class NabvarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    if (termino.length === 0) { return; }
    this.route.navigate(['busqueda'], { queryParams: { termino: termino } });
  }

}

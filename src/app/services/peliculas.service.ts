import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private path = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=d185737caf14f8b0c3f7a18d22d4a2f4';
  private callBack = 'callback=JSONP_CALLBACK';
  private langaje = '&language=es';
  peliculas: any[] = [];
  constructor(private http: HttpClient) { }

  peliculasActuales(fechaDesde: string, fechaHasta: string) {

    let url = `${this.path}/discover/movie?primary_release_date.gte=${fechaDesde}&primary_release_date.lte=${fechaHasta}&${this.apiKey}${this.langaje}&page=1`;
    return this.http.jsonp(url, this.callBack).pipe(map((resp: any) => resp.results));
  }

  buscarPeliculaId(id: number) {
    let url = `${this.path}/movie/${id}?${this.apiKey}${this.langaje}`;
    return this.http.jsonp(url, this.callBack).pipe(map((resp: any) => resp));
  }

  buscarPelicula(texto: string) {
    this.peliculas = [];
    let url = `${this.path}/search/movie?query=${texto}&sort_by=popularity.desc&${this.apiKey}${this.langaje}`;
    return this.http.jsonp(url, this.callBack).pipe(map((res: any) => {
      this.peliculas = res.results;
      return res.results;
    }));
  }

  buscarPeliculasPolulares() {
    let url = `${this.path}/discover/movie?sort_by=popularity.desc&${this.apiKey}`;
    return this.http.jsonp(url, this.callBack).pipe(map((res: any) => res.results));
  }

  buscarPeliculaNinos() {
    let url = `${this.path}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${this.apiKey}`;
    return this.http.jsonp(url, this.callBack).pipe(map((res: any) => res.results));
  }

}

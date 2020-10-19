import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImage'
})
export class UrlImagePipe implements PipeTransform {

  transform(pelicula: any, valor: string): any {

    let url = 'http://image.tmdb.org/t/p/w500';

    if (valor === 'poster' && pelicula.poster_path) {

      return url + pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/no-image.png';
      }
    }


  }

}

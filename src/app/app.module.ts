import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DatePipe } from '@angular/common/';
import { PeliculasService } from '../app/services/peliculas.service';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { UrlImagePipe } from './pipes/url-image.pipe';
import { PeliculaComponent } from './components/pages/pelicula/pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaleriaComponent } from './components/pages/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    BusquedaComponent,
    UrlImagePipe,
    PeliculaComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PeliculasService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pages/pelicula/pelicula.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'pelicula/:id/:page', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

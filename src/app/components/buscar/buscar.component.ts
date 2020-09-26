import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService , Heroe } from './../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['heroe'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroes( params['heroe'] );
      console.log( this.heroes );
    });
   }



}

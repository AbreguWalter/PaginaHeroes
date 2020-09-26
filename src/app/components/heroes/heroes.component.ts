import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe} from '../../servicios/heroes.service';
import { Router } from '@angular/router';
/*
  Como en la importacion de la clase HeoresService se creo la interface Heroe,
  basta con llamarlo en el import para hacer uso de el
*/


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router
              ) {/*El constructor se ejecuta primero*/}

  ngOnInit(): void {
    /*El ngOnInit se ejecuta despues del constructor*/
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number): void {
    this.router.navigate( ['/heroe', idx] );
  }

}

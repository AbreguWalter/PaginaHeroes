import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // Para escuchar de un etiqueta hijo a una padre
  @Input() heroe: any = {};
  @Input() index: number;

  // Para escuchar de un padre a un hijo
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}

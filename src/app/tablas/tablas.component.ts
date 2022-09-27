import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../altas/altas.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnChanges{
  @Input() personas: Persona[] = [];
  arreglo_5_usuarios: Persona[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("si_tablas")
  }

  palomita = false;
  palomitas(valor: number)
  {
    this.palomita = this.personas[valor].permitir;
    this.personas[valor].permitir = !this.palomita;
    console.log("palomitas:")
    console.log(this.personas);
    console.log("---------")
  }
  usuarios(e: Persona[])
  {
    this.arreglo_5_usuarios = e;
  }
}
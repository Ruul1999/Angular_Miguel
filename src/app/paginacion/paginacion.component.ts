import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Persona } from '../altas/altas.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit{
  @Input() arreglo_personas: Persona[] = [];
  arreglo_5_usuarios: Persona[]= [];
  @Output()
  arreglo_5_usuarios_: EventEmitter<Persona[]> = new EventEmitter<Persona[]>();

  constructor(private comunicacion: AppComponent) { }
  ngOnInit(): void {
    this.comunicacion.enviar_arreglo_observable.subscribe(personas =>{
      this.arreglo_personas = personas;
      console.log("---------")
      console.log(this.arreglo_personas);
      console.log("---------")
      this.botonestabla(this.posicion_tabla_principal);
    })
  }

  arreglo_busqueda: any[] = [];
  cantidad: string = "TOTAL USUARIOS: 0";
  cantidad_total_usuarios: number = 0;

  //Cambio De Posiciones Por Medio De Botones En La Tabla Principal O De Busqueda.
  mostrar_tabla = "tabla1";
  posicion_tabla_principal: any = 0;
  copia_posicion_tabla_principal: any = 0;
  posicion_tabla_busqueda: any = 0;
  copia_posicion_tabla_busqueda: any = 0;
  copia_posicion: any = 0;
  limite_tabla: number = 5;
  ultimo() {
    if (this.mostrar_tabla == "tabla2") {
      if (this.limite_siguiente(this.posicion_tabla_busqueda + 1) == true) {
        this.posicion_tabla_busqueda = this.arreglo_busqueda.length / this.limite_tabla;

        if (this.arreglo_busqueda.length % this.limite_tabla > 0) {
          this.posicion_tabla_busqueda = parseInt(this.posicion_tabla_busqueda);
        }
        else {
          this.posicion_tabla_busqueda = parseInt(this.posicion_tabla_busqueda) - 1;
        }
        this.botonestabla(this.posicion_tabla_busqueda);
      }
      else {
        console.log("Ya Te Encuentras En La Ultima Posicion");
      }
    }
    else {
      if (this.limite_siguiente(this.posicion_tabla_principal + 1) == true) {
        this.posicion_tabla_principal = this.arreglo_personas.length / this.limite_tabla;

        if (this.arreglo_personas.length % this.limite_tabla > 0) {
          this.posicion_tabla_principal = parseInt(this.posicion_tabla_principal);
        }
        else {
          this.posicion_tabla_principal = parseInt(this.posicion_tabla_principal) - 1;
        }
        this.botonestabla(this.posicion_tabla_principal);
      }
      else {
        console.log(this.arreglo_personas)
        console.log("Ya Te Encuentras En La Ultima Posicion");
      }
    }
  }

  siguiente() {
    if (this.mostrar_tabla == "tabla2") {
      if (this.limite_siguiente(this.posicion_tabla_busqueda + 1) == true) {
        if (this.arreglo_busqueda.length > this.limite_tabla) {
          this.posicion_tabla_busqueda++;
        }
        this.botonestabla(this.posicion_tabla_busqueda);
      }
      else {
        console.log("Limite Superior Excedido");
      }
    }
    else {
      if (this.limite_siguiente(this.posicion_tabla_principal + 1) == true) {
        if (this.arreglo_personas.length > this.limite_tabla) {
          this.posicion_tabla_principal++;
        }
        this.botonestabla(this.posicion_tabla_principal);
      }
      else {
        console.log("Limite Superior Excedido");
      }
    }
  }

  //Esta Funcion Sirve Para Que El Boton Siguiente No Exceda El Limite De La Tabla Al Pulsarse.
  limite_siguiente(posicion_siguiente: any) {
    var arreglo_tabla: any[] = [];
    if (this.mostrar_tabla == "tabla2") {
      arreglo_tabla = this.arreglo_busqueda;
    }
    else {
      arreglo_tabla = this.arreglo_personas;
    }

    this.copia_posicion = arreglo_tabla.length / this.limite_tabla;

    if (arreglo_tabla.length % this.limite_tabla > 0) {
      this.copia_posicion = parseInt(this.copia_posicion);
    }
    else {
      this.copia_posicion = parseInt(this.copia_posicion) - 1;
    }

    if (posicion_siguiente > this.copia_posicion) {
      return false;
    }
    else {
      return true;
    }
  }
  ////////////////////////////////////////////////////////////////

  anterior() {
    if (this.mostrar_tabla == "tabla2") {
      if (this.posicion_tabla_busqueda - 1 > -1) {
        if (this.arreglo_busqueda.length > this.limite_tabla) {
          this.posicion_tabla_busqueda--;
        }
        this.botonestabla(this.posicion_tabla_busqueda);
      }
      else {
        console.log("Limite Inferior Excedido");
      }
    }
    else {
      if (this.posicion_tabla_principal - 1 > -1) {
        if (this.arreglo_personas.length > this.limite_tabla) {
          this.posicion_tabla_principal--;
        }
        this.botonestabla(this.posicion_tabla_principal);
      }
      else {
        console.log("Limite Inferior Excedido");
      }
    }
  }

  principio() {
    if (this.mostrar_tabla == "tabla2") {
      if (this.posicion_tabla_busqueda == 0) {
        console.log("Ya Te Encuentras En El Principio");
      }
      else {
        this.posicion_tabla_busqueda = 0;
        this.botonestabla(this.posicion_tabla_busqueda);
      }
    }
    else {
      if (this.posicion_tabla_principal == 0) {
        console.log("Ya Te Encuentras En El Pincipio");
      }
      else {
        this.posicion_tabla_principal = 0;
        this.botonestabla(this.posicion_tabla_principal);
      }
    }
  }
  ////////////////////////////////////////////////////////////////
  //Esta Funcion Recibe La Posicion De la Tabla Principal O De Busqueda.
  //Se Encarga De Mostrar Los Datos De los Usuarios Que Se Encuentren En La Posicion Recibida.
  palomitas_checks: any[] = [];
  checksboolean: any[] = [];
  botonestabla(posicion_tabla: number) {
    console.log(":D " + posicion_tabla);
    this.arreglo_5_usuarios = [];
    var limite_tabla = this.limite_tabla;
    var limite: number = 0;
    var arreglo_5_usuarios = this.arreglo_5_usuarios;

    this.arreglo_personas.forEach(function (valor, indice) {
      if (indice >= (posicion_tabla * limite_tabla) && limite < limite_tabla) {
        arreglo_5_usuarios.push(valor);
        limite++;
      }
    });
    this.arreglo_5_usuarios = arreglo_5_usuarios;

    this.arreglo_5_usuarios_.emit(arreglo_5_usuarios);
  }
}

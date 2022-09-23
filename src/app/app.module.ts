import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AltasComponent } from './altas/altas.component';
import { TablasComponent } from './tablas/tablas.component';
import { ModalMostrarComponent } from './modal-mostrar/modal-mostrar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    AltasComponent,
    TablasComponent,
    ModalMostrarComponent,
    ModalEliminarComponent,
    PaginacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

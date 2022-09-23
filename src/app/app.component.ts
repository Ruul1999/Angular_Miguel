import { Component, OnChanges, SimpleChanges} from '@angular/core';
import { Persona } from './altas/altas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'angular_primer_proyecto';
  personas: Persona[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    console.log("si_app")
  }
  padre(e: Persona[])
  {
    this.personas = e;
  }
}

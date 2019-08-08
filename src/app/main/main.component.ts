import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { VistaPreviaComponent } from 'app/vista-previa/vista-previa.component';
import { CarritoService } from 'app/carrito.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [CarritoService]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

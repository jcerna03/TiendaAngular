import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'app/carrito.service'

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  seleccionados: any[];
  constructor(private CarritoService: CarritoService) { }
  ngOnInit() {
    this.seleccionados = this.CarritoService.productosSeleccionados;
  }

}

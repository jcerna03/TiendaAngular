import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito: any[];
  total: string = "10";
  constructor(private CarritoService: CarritoService) { }

  ngOnInit() {
    console.log("oninit")
    this.productosCarrito = this.CarritoService.productosCarrito();
  }

  Total() {
    console.log("calcularTotal")
    // this.productosCarrito.forEach(producto => {
    //   console.log(producto)
    // });
  }

}

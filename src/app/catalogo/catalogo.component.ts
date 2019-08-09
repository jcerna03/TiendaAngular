import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: Productos[];
  filtro: string;

  constructor(private CarritoService: CarritoService) { }

  ngOnInit() {
    this.CarritoService.getProductos()
      .subscribe((data) => this.productos = data);
  }

  Prueba(){

      console.log("Prueba")

    
  }

  OnSeleccionar(nombre, cantidad, imagen) {
    let precio = this.getPrecioProducto(nombre) * cantidad;
    let producto = { nombre: nombre, cantidad: cantidad, imagen: imagen, precio: precio };
    this.CarritoService.seleccionarProducto(producto)
  }
  getPrecioProducto(nombre) {
    for (let item of this.productos) {
      if (item.nombre == nombre) {
        return item.precio;
      }
    }
  }
}

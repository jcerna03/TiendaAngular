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
    this.filtro = "";
    this.CarritoService.getProductos()
      .subscribe((data) => this.productos = data);
  }

  // Prueba(){
  //   this.CarritoService.productosSeleccionados = [{ nombre: "nombre", cantidad: 1, imagen: "imagen", precio: 20 }];
  //     console.log(this.CarritoService.productosSeleccionados.length)
  // }

  Prueba() {
    this.CarritoService.productosSeleccionados.splice(0, this.CarritoService.productosSeleccionados.length);
    console.log(this.CarritoService.productosSeleccionados.length)
  }

  OnSeleccionar(nombre, cantidad, imagen) {
    let precio = this.getPrecioProducto(nombre) * cantidad;
    let producto = { nombre: nombre, cantidad: cantidad, imagen: imagen, precio: precio };
    this.CarritoService.productosSeleccionados.push(producto);
    // this.CarritoService.seleccionarProducto(producto)
    //console.log(this.CarritoService.productosSeleccionados.length)
  }

  getPrecioProducto(nombre) {
    for (let item of this.productos) {
      if (item.nombre == nombre) {
        return item.precio;
      }
    }
  }
}

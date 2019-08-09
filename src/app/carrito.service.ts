import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Productos } from './productos';
import 'rxjs/Rx';

@Injectable()
export class CarritoService {

  productosSeleccionados: any[] = [];
  productos: Productos[];
  
  constructor(private http: Http) {
    this.getProductos().subscribe((data) => this.productos = data);
  }

  getProductos() {
    return this.http
      .get('https://tienda-13a10.firebaseio.com/productos.json')
      .map((response: Response) => response.json())
  }

  // seleccionarProducto(pedido) {
  //   this.productosSeleccionados.push(pedido);
  // }

  productosCarrito() {
    return this.productosSeleccionados;
  }

  Pagar() {
    for (let key in this.productos) {
      for (let item of this.productosSeleccionados) {
        if (this.productos[key].nombre == item.nombre) {
          this.productos[key].unidades -= item.cantidad;
        }
      }
    }
    this.productosSeleccionados.splice(0, this.productosSeleccionados.length);
    let newData = JSON.stringify(this.productos);
    return this.http.put('https://tienda-13a10.firebaseio.com/productos.json', newData)
  }

}

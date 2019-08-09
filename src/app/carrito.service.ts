import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Productos } from './productos';
import 'rxjs/Rx';

@Injectable()
export class CarritoService {

  productosSeleccionados: any[] = [];
  productos: Productos[];

  constructor(private http: Http) {
  }

  getProductos() {
    return this.http
      .get('https://tienda-13a10.firebaseio.com/productos.json')
      .map((response: Response) => response.json())
  }

  seleccionarProducto(pedido) {
    this.productosSeleccionados.push(pedido);
  }



}

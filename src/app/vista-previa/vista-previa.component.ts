import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit {

  nombre : string;
  productoSeleccionado : Productos = {nombre: '', precio: 0, imagen: '', unidades: 0};

  constructor(private ActivatedRoute : ActivatedRoute, private CarritoService : CarritoService) { }

  ngOnInit() {
    this.nombre = this.ActivatedRoute.snapshot.params['nombre'];
    this.CarritoService.getProductos()
      .subscribe(
        (data) => {
          for(let item of data){
            if(item.nombre == this.nombre){
              this.productoSeleccionado = item;
            }
          }
        }
      )
  }

}

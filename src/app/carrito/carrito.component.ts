import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  productosCarrito: any[];
  total: Number = 0;
  constructor(private CarritoService: CarritoService, private router : Router) { }

  ngOnInit() {
    this.productosCarrito = this.CarritoService.productosCarrito();
  }

  Total() {
    let total = 0;
     this.productosCarrito.forEach(producto => {
       total = total + producto.precio
     });
     return total;
  }

  Pagar(){
    this.CarritoService.Pagar()
    .subscribe((data)=>this.router.navigate(['/main']));
  }

}

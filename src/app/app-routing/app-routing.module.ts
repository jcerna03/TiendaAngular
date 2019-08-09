import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { MainComponent } from 'app/main/main.component';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { VistaPreviaComponent } from 'app/vista-previa/vista-previa.component';
import { CarritoComponent } from 'app/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main', component: MainComponent, children: [
      {
        path: '',
        component: CatalogoComponent
      },
      {
        path: 'vista-previa/:nombre',
        component: VistaPreviaComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }

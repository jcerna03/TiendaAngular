import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MainComponent } from './main/main.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraSuperiorComponent,
    CatalogoComponent,
    VistaPreviaComponent,
    CarritoComponent,
    MainComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }

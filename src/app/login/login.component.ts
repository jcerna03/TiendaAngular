import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  FormularioLogin: FormGroup;
  Objetos: any[];
  Logeado: string;

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.AuthService.Login().subscribe(
      (data) => this.Objetos = data
    )
    this.FormularioLogin = new FormGroup({
      'user': new FormControl('Ingrese usuario', Validators.required),
      'pass': new FormControl()
    })
  }
  OnLogin() {
    this.Logeado == "NO"
    this.Objetos.forEach(element => {
      if (element.user == this.FormularioLogin.value.user && element.pass == this.FormularioLogin.value.pass) {
        this.Logeado = "SI";
        return;
      }
    });
    if (this.Logeado == "SI") {
      this.router.navigate(['main']);
    }
    else {
      alert('Usuario y/o password incorrectos.')
    }
  }
}

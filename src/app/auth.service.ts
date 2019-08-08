import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }
  
  Login() {
    return this.http
      .get('https://tienda-13a10.firebaseio.com/usuario.json')
      .map((response: Response) => response.json())
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {
    this.http = http;
    
  }


  login(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/login`, user);
  }


}

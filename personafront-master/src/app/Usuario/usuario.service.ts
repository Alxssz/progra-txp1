import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuarios'; // cambia al URL de tu backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Llama al endpoint de login de tu backend
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  mensaje = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    this.loading = true;
    this.mensaje = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username: this.username, password: this.password };

    this.http.post('http://localhost:8080/usuarios/login', body, { headers, responseType: 'text' })
      .subscribe({
        next: (res) => {
          console.log('Login OK:', res);
          this.router.navigate(['/principal']);
          this.loading = false;
        },
        error: (err) => {
          console.log('Error:', err);
          if (err.status === 400) this.mensaje = 'Faltan parámetros';
          else if (err.status === 401) this.mensaje = 'Usuario o contraseña incorrectos';
          else this.mensaje = 'Error desconocido';
          this.loading = false;
        }
      });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario/usuario.service';

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

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin() {
    this.loading = true;
    this.mensaje = '';

    this.usuarioService.login(this.username, this.password)
      .subscribe({
        next: (res) => {
          console.log('login existoso con token');


          localStorage.setItem('token', res);

          this.router.navigate(['/principal']);
          this.loading = false;
        },
        error: (err) => {
          console.log('Error permisos no concedidos:');
          if (err.status === 400) this.mensaje = 'Faltan parámetros';
          else if (err.status === 401) this.mensaje = 'Usuario o contraseña incorrectos';
          else this.mensaje = 'Error desconocido';
          this.loading = false;
        }
      });
  }
}

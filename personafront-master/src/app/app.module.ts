// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PrincipalComponent } from './services/principal/principal.component';

// Servicios
import { UsuarioService } from './usuario/usuario.service';
import { PersonaService } from './services/persona/persona.service';
import { PaisesService } from './services/paises/paises.service';
import { NivelesService } from './services/niveles/niveles.service';
import { EstadosService } from './services/estados/estados.service';
import { CarrerasService } from './services/carreras/carreras.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSortModule,
    MatToolbarModule
  ],
  providers: [
    UsuarioService,
    PersonaService,
    PaisesService,
    NivelesService,
    EstadosService,
    CarrerasService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

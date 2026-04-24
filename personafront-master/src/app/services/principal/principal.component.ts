import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { EstadosService } from '../estados/estados.service';
import { PaisesService } from '../paises/paises.service';
import { PersonaService } from '../persona/persona.service';
import { NivelesService } from '../niveles/niveles.service';
import { CarrerasService } from '../carreras/carreras.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  personaForm!: UntypedFormGroup;
  paises: any[] = [];
  estados: any[] = [];
  niveles: any[] = [];
  carreras: any[] = [];
  personas: any[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id', 'name', 'last-name', 'age',
    'country-name', 'state-name', 'nivel-name', 'carrera-name', 'options'
  ];
  panelOpenState = false;

  constructor(
    private fb: UntypedFormBuilder,
    private estadosService: EstadosService,
    private paisesService: PaisesService,
    private personaService: PersonaService,
    private nivelesService: NivelesService,
    private carrerasService: CarrerasService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.setDataAndPagination();
  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cui: ['', [Validators.required, Validators.pattern('^\\d{13}$')]],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      nivel: ['', Validators.required],
      carrera: ['', Validators.required]
    });

    this.paisesService.getAllPaises().subscribe(resp => this.paises = resp);
    this.nivelesService.getAllNiveles().subscribe(resp => this.niveles = resp);
    this.personaService.getAllPersonas().subscribe(resp => {
      this.personas = resp;
      this.setDataAndPagination();
    });

    this.personaForm.get('pais')!.valueChanges.subscribe(value => {
      if (!value) { this.estados = []; this.personaForm.get('estado')!.reset(); return; }
      this.estadosService.getAllEstadosByPais(value.id).subscribe(resp => this.estados = resp);
    });

    this.personaForm.get('nivel')!.valueChanges.subscribe(value => {
      this.personaForm.get('carrera')!.reset();
      this.carreras = [];
      if (!value) return;
      this.carrerasService.getCarrerasByNivel(value.id).subscribe(resp => this.carreras = resp);
    });
  }

  guardar(): void {
    const payload = { ...this.personaForm.value };
    if (payload.cui) payload.cui = String(payload.cui).trim();
    if (!payload.estadoP) payload.estadoP = 'E';

    this.personaService.savePersona(payload).subscribe(resp => {
      this.personaForm.reset();
      this.personaForm.setErrors(null);
      this.personas = this.personas.filter(p => p.id !== resp.id);
      this.personas.push(resp);
      this.setDataAndPagination();
    });
  }

  eliminar(persona: any): void {
    this.personaService.deletePersona(persona.id).subscribe(resp => {
      if (resp) {
        this.personas = this.personas.filter(p => p.id !== persona.id);
        this.setDataAndPagination();
      }
    });
  }

  editar(persona: any): void {
    this.personaForm.patchValue({
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      cui: persona.cui != null ? String(persona.cui) : '',
      edad: persona.edad,
      pais: persona.pais,
      estado: persona.estado,
      nivel: persona.nivel,
      carrera: persona.carrera
    });

    if (persona.nivel) {
      this.carrerasService.getCarrerasByNivel(persona.nivel.id).subscribe(resp => {
        this.carreras = resp;
        this.personaForm.get('carrera')!.setValue(persona.carrera);
      });
    }

    this.panelOpenState = true;
  }

  cancelar(): void {
    this.personaForm.reset();
    this.personaForm.setErrors(null);
    this.panelOpenState = false;
    this.carreras = [];
  }

  setDataAndPagination(): void {
    this.dataSource = new MatTableDataSource(this.personas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Función logout
  logout(): void {
    localStorage.clear(); // o sessionStorage.clear() si guardas sesión allí
    this.router.navigate(['/login']);
  }
}

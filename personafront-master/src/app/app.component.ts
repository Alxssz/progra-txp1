// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>` // Aquí se cargan Login y Principal según ruta
})
export class AppComponent { }

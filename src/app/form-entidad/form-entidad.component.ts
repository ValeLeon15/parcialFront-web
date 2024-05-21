import { Component, Input } from '@angular/core';
import { Entidad } from '../model/entidad';
import { EntidadService } from '../services/entidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-entidad',
  templateUrl: './form-entidad.component.html',
  styleUrl: './form-entidad.component.css'
})
export class FormEntidadComponent {

  @Input()
  entidad!: Entidad;
  
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private entidadService: EntidadService, private router: Router) { }

  ngOnInit(): void {
    if (!this.entidad) {
      this.entidad = new Entidad(0, '');
    }
  }

  crearEntidad() {
    console.log('Crear Entidad', this.entidad);
    this.entidadService.crearEntidad(this.entidad).subscribe(
      entidad => {
        console.log('Entidad creada', entidad);
        this.entidad = new Entidad(0, '');
        this.router.navigate(['/entidad/list']);
      }
    );
  }
    
  updateEntidad() {
    console.log('Entidad a actualizar', this.entidad);
    this.entidadService.actualizarEntidad(this.entidad).subscribe(
      response => {
        this.mensajeExito = 'Entidad actualizada correctamente.';
        this.router.navigate(['/entidad/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar la entidad.';
        console.error('Error al actualizar la entidad:', error);
      }
    );
  }
}

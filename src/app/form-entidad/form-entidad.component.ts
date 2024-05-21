import { Component, Input } from '@angular/core';
import { Celular } from '../model/celular';
import { CelularService } from '../services/celular.service';
import { Router } from '@angular/router';
import { SistemaOperativo } from '../model/sistema-operativo';
import { Gama } from '../model/gama';

@Component({
  selector: 'app-form-entidad',
  templateUrl: './form-entidad.component.html',
  styleUrl: './form-entidad.component.css'
})
export class FormEntidadComponent {

  @Input()
  celular!: Celular;
  
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private celularService: CelularService, private router: Router) { }

  ngOnInit(): void {
    if (!this.celular) {
      this.celular = new Celular(0, '', 0, new Date(), 0, 0, SistemaOperativo.ANDROID, Gama.ALTA);
    }
  }

  crearCelular() {
    console.log('Crear Entidad', this.celular);
    this.celularService.crearCelular(this.celular).subscribe(
      celular => {
        console.log('Entidad creada', celular);
        this.celular = new Celular(0, '', 0, new Date(), 0, 0, SistemaOperativo.ANDROID, Gama.ALTA);
        this.router.navigate(['/celular/list']);
      }
    );
  }
    
  actualizarCelular() {
    console.log('Entidad a actualizar', this.celular);
    this.celularService.actualizarCelular(this.celular).subscribe(
      response => {
        this.mensajeExito = 'Entidad actualizada correctamente.';
        this.router.navigate(['/celular/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar la entidad.';
        console.error('Error al actualizar la entidad:', error);
      }
    );
  }
}

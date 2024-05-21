import { Component } from '@angular/core';
import { Entidad } from '../../model/entidad';

@Component({
  selector: 'app-entidad-create',
  templateUrl: './entidad-create.component.html',
  styleUrl: './entidad-create.component.css'
})
export class EntidadCreateComponent {
  EntidadCrear: Entidad = new Entidad(0, '');
  esCrear: boolean = true;  
}

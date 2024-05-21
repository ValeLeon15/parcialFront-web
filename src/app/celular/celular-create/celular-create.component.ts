import { Component } from '@angular/core';
import { SistemaOperativo } from '../../model/sistema-operativo';
import { Gama } from '../../model/gama';
import { Celular } from '../../model/celular';

@Component({
  selector: 'app-celular-create',
  templateUrl: './celular-create.component.html',
  styleUrl: './celular-create.component.css'
})
export class CelularCreateComponent {
  CelularCrear: Celular = new Celular(0, '', 0, new Date(), 0, 0, SistemaOperativo.ANDROID, Gama.ALTA); //arreglo
  esCrear: boolean = true;  

}

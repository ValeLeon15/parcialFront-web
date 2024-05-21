import { Component, Input, SimpleChanges } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Router } from '@angular/router';
import { Entidad } from '../../model/entidad';

@Component({
  selector: 'app-entidad-edit',
  templateUrl: './entidad-edit.component.html',
  styleUrl: './entidad-edit.component.css'
})
export class EntidadEditComponent {
  esCrear: boolean = false;
  entidad!: Entidad;
  constructor(
    private entidadService: EntidadService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId!=0){
          console.log("entra")
          this.entidadService.obtenerEntidadPorId(userId).subscribe((data: Entidad) => {
            this.entidad = data;
            console.log("el entidad es", this.entidad)
          },
          error => {
            console.error('Error al cargar el entidad:', error);
          }
        );
        }
      } 
  }
  }
  @Input()
  set id(id: number) {
    console.log(id)
  }
}

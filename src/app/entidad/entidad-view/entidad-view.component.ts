import { Component, Input, SimpleChanges } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Router } from '@angular/router';
import { Entidad } from '../../model/entidad';

@Component({
  selector: 'app-entidad-view',
  templateUrl: './entidad-view.component.html',
  styleUrl: './entidad-view.component.css'
})
export class EntidadViewComponent {
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
            console.error('Error al cargar el arrendador:', error);
          }
        );
        }
      } 
  }
  }

  @Input()
  set id(id: number) {
    console.log(this.entidad)
  }
  
  ngOnInit(): void {
  }

  borrarEntidad(id: number) {
    this.entidadService.borrarEntidad(id).subscribe(
      () => {
        console.log('entidad borrado exitosamente');
        this.router.navigate(['/entidad/list']);
      },
      error => {
        console.error('Error al borrar la entidad:', error);        
      }
    );
  }
}

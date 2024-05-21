import { Component, Input, SimpleChanges } from '@angular/core';
import { Celular } from '../../model/celular';
import { CelularService } from '../../services/celular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celular-view',
  templateUrl: './celular-view.component.html',
  styleUrl: './celular-view.component.css'
})
export class CelularViewComponent {
  celular!: Celular;
  constructor(
    private celularService: CelularService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId!=0){
          console.log("entra")
          this.celularService.obtenerCelularPorId(userId).subscribe((data: Celular) => {
            this.celular = data;
            console.log("el entidad es", this.celular)
          },
          error => {
            console.error('Error al cargar :', error);
          }
        );
        }
      } 
  }
  }

  @Input()
  set id(id: number) {
    console.log(this.celular)
  }
  
  ngOnInit(): void {
  }

  borrarCelular(id: number) {
    this.celularService.borrarCelular(id).subscribe(
      () => {
        console.log('entidad borrado exitosamente');
        this.router.navigate(['/celular/list']);
      },
      error => {
        console.error('Error al borrar la entidad:', error);        
      }
    );
  }
}

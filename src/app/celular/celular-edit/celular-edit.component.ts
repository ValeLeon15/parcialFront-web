import { Component, Input, SimpleChanges } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../model/celular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celular-edit',
  templateUrl: './celular-edit.component.html',
  styleUrl: './celular-edit.component.css'
})
export class CelularEditComponent {
  esCrear: boolean = false;
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
            console.log("el celular es", this.celular)
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

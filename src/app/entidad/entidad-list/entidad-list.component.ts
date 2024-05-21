import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../model/entidad';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
  styleUrl: './entidad-list.component.css'
})
export class EntidadListComponent {
  entidad: Entidad[] = [];

  constructor(
    private entidadService: EntidadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entidadService
      .listarEntidades()
      .subscribe((entidad) => (this.entidad = entidad));
    console.log(this.entidad);
  }
}

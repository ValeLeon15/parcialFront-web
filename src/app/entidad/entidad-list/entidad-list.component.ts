import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../model/entidad';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
  styleUrl: './entidad-list.component.css'
})
export class EntidadListComponent implements OnInit{
  entidades: Entidad[] = [];

  constructor(
    private entidadService: EntidadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entidadService
      .listarEntidades()
      .subscribe((entidades) => (this.entidades = entidades));
    console.log(this.entidades);
  }
}

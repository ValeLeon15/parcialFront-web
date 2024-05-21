import { Component } from '@angular/core';
import { Celular } from '../../model/celular';
import { CelularService } from '../../services/celular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrl: './celular-list.component.css'
})
export class CelularListComponent {
  celulares: Celular[] = [];

  constructor(
    private celularService: CelularService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.celularService
      .listarCelulares()
      .subscribe((celulares) => (this.celulares = celulares));
    console.log(this.celulares);
  }

}

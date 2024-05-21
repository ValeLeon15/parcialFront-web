import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CelularListComponent } from './celular/celular-list/celular-list.component';
import { CelularCreateComponent } from './celular/celular-create/celular-create.component';
import { CelularEditComponent } from './celular/celular-edit/celular-edit.component';
import { CelularViewComponent } from './celular/celular-view/celular-view.component';

const routes: Routes = [
    { path: 'celular/list', component: CelularListComponent },
    { path: 'celular/create', component: CelularCreateComponent },
    { path: 'celular/edit/:id', component: CelularEditComponent},
    { path: 'celular/view/:id', component: CelularViewComponent},
  
    { path: '', pathMatch: 'full', redirectTo: 'celular/list' }, // Redirige a la ruta de inicio de sesión cuando la URL está vacía
];

  @NgModule({
    imports: [RouterModule.forRoot(routes,
      {
        bindToComponentInputs: true,
        onSameUrlNavigation: 'reload'
      })], 
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
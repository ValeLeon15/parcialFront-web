import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntidadListComponent } from './entidad/entidad-list/entidad-list.component';
import { EntidadCreateComponent } from './entidad/entidad-create/entidad-create.component';
import { EntidadEditComponent } from './entidad/entidad-edit/entidad-edit.component';
import { EntidadViewComponent } from './entidad/entidad-view/entidad-view.component';

const routes: Routes = [
    { path: 'entidad/list', component: EntidadListComponent },
    { path: 'entidad/create', component: EntidadCreateComponent },
    { path: 'entidad/edit/:id', component: EntidadEditComponent},
    { path: 'entidad/view/:id', component: EntidadViewComponent},
  
    { path: '', pathMatch: 'full', redirectTo: 'entidad/list' }, // Redirige a la ruta de inicio de sesión cuando la URL está vacía
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
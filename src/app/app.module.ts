import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormEntidadComponent } from './form-entidad/form-entidad.component';
import { CelularCreateComponent } from './celular/celular-create/celular-create.component';
import { CelularEditComponent } from './celular/celular-edit/celular-edit.component';
import { CelularListComponent } from './celular/celular-list/celular-list.component';
import { CelularViewComponent } from './celular/celular-view/celular-view.component';

@NgModule({
    declarations: [
        AppComponent,
        FormEntidadComponent, 
        CelularCreateComponent, 
        CelularEditComponent, 
        CelularListComponent, 
        CelularViewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

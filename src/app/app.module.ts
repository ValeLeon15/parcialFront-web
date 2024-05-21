import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EntidadListComponent } from './entidad/entidad-list/entidad-list.component';
import { EntidadEditComponent } from './entidad/entidad-edit/entidad-edit.component';
import { EntidadViewComponent } from './entidad/entidad-view/entidad-view.component';
import { FormEntidadComponent } from './form-entidad/form-entidad.component';
import { EntidadCreateComponent } from './entidad/entidad-create/entidad-create.component';

@NgModule({
    declarations: [
        AppComponent,
        EntidadListComponent,
        EntidadCreateComponent,
        EntidadEditComponent,
        EntidadViewComponent, 
        FormEntidadComponent,
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

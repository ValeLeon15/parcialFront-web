import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entidad } from '../model/entidad'; // Cambiado de Arrendador a Entidad
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EntidadService { // Cambiado de ArrendadorService a EntidadService

  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarEntidades(): Observable<Entidad[]> { // Cambiado de listarArrendadores a listarEntidades
    return this.http.get<Entidad[]>(`${environment.serverUrl}/progrupo14/entidades`) // Cambiado de arrendadores a entidades
  }

  borrarEntidad(id: number): Observable<void> { // Cambiado de borrarArrendador a borrarEntidad
    return this.http.delete<void>(`${environment.serverUrl}/progrupo14/entidades/${id}`) // Cambiado de arrendadores a entidades
  }

  crearEntidad(entidad: Entidad): Observable<Entidad> { // Cambiado de crearArrendador a crearEntidad
    return this.http.post<Entidad>(`${environment.serverUrl}/progrupo14/entidades`, entidad, { headers: this.headers }) // Cambiado de arrendadores a entidades
  }
  
  obtenerEntidadPorId(id: number): Observable<Entidad> { // Cambiado de obtenerArrendadorPorId a obtenerEntidadPorId
    return this.http.get<Entidad>(`${environment.serverUrl}/progrupo14/entidades/${id}`); // Cambiado de arrendadores a entidades
  }

  actualizarEntidad(entidad: Entidad): Observable<Entidad> { // Cambiado de actualizarArrendador a actualizarEntidad
    return this.http.put<Entidad>(`${environment.serverUrl}/progrupo14/entidades`, entidad, { headers: this.headers }); // Cambiado de arrendadores a entidades
  }

}

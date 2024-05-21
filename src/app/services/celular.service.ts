import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celular } from '../model/celular'; 
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CelularService { 

  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarCelulares(): Observable<Celular[]> { // Cambiado de listarArrendadores a listarEntidades
    return this.http.get<Celular[]>(`${environment.serverUrl}parcial/celular`) // Cambiado de arrendadores a entidades
  }

  borrarCelular(id: number): Observable<void> { // Cambiado de borrarArrendador a borrarEntidad
    return this.http.delete<void>(`${environment.serverUrl}parcial/celular/${id}`) // Cambiado de arrendadores a entidades
  }

  crearCelular(celular: Celular): Observable<Celular> { // Cambiado de crearArrendador a crearEntidad
    return this.http.post<Celular>(`${environment.serverUrl}parcial/celular`, celular, { headers: this.headers }) // Cambiado de arrendadores a entidades
  }
  
  obtenerCelularPorId(id: number): Observable<Celular> { // Cambiado de obtenerArrendadorPorId a obtenerEntidadPorId
    return this.http.get<Celular>(`${environment.serverUrl}parcial/celular/${id}`); // Cambiado de arrendadores a entidades
  }

  actualizarCelular(celular: Celular): Observable<Celular> { // Cambiado de actualizarArrendador a actualizarEntidad
    return this.http.put<Celular>(`${environment.serverUrl}parcial/celular`, celular, { headers: this.headers }); // Cambiado de arrendadores a entidades
  }

}

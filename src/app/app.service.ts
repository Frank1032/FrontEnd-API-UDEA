
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Festivo } from './models/Festivo';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/festivos';// Url principal de la API - Backend

  constructor(private httpClient: HttpClient) { }

  // Solicita a http://localhost:8080/festivos/verificar/{año}/{mes}/{dia}
  verificarFestivo(año: number, mes: number, dia: number): Observable<string> {
    return this.httpClient.get(`${this.apiUrl}/verificar/${año}/${mes}/${dia}`, { responseType: 'text' })
      .pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud HTTP:', error);
          return of('Error al procesar la respuesta del servidor');
        })
      );
  }

  // Solicita a http://localhost:8080/festivos/obtener/{año}
  obtenerFestivos(año: number): Observable<Festivo[]> {
    return this.httpClient.get<Festivo[]>(`${this.apiUrl}/obtener/${año}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError('Error al procesar la respuesta del servidor');
        })
      );
  }
}

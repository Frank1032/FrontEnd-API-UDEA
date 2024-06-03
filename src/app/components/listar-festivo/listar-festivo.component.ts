



import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import { Festivo } from 'src/app/models/Festivo';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-festivo',
  templateUrl: './listar-festivo.component.html',
  styleUrls: ['./listar-festivo.component.css'],

})

export class ListarFestivoComponent {
  festivos: Festivo[] = [];
  year: number | undefined;

  // Columnas de la tabla, mapeado por el objeto festivo
  columns = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Fecha', prop: 'fecha' }
  ];

  public tipoSeleccion = SelectionType;
  public posicionSeleccionada: Festivo | undefined;

  constructor(private apiService: ApiService) { }

  obtenerFestivos(): void {
    // Reiniciar el contenido de las fechas, en caso de que existan
    this.festivos = [];

    // Valida si el año está vacio
    if (!this.year || this.year < 1000 || this.year > 4000) {

      Swal.fire('Error', 'Por favor, ingrese un año válido.', 'error');
      return;
    }

    this.apiService.obtenerFestivos(this.year)
      .subscribe(

        // Convierte el formato de fecha en dd/mm/yyyy
        (data) => {

          Swal.fire('Exito', 'Festivos encontrados para el año ' + this.year, 'success');
          this.festivos = data.map(festivo => ({
            ...festivo,
            fecha: new Date(festivo.fecha).toLocaleDateString()
          }));
        },
        (error) => {
          console.error('Error al obtener festivos:', error);
          Swal.fire('Error', 'Error al obtener festivos. Por favor, inténtelo de nuevo más tarde.', 'error');
        }
      );
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.posicionSeleccionada = event.row;
    }
  }
}
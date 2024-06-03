

import { Component } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-consultar-festivo',
  templateUrl: './consultar-festivo.component.html',
  styleUrls: ['./consultar-festivo.component.css']
})

export class ConsultarFestivoComponent {
  fechaSeleccionada: Date = new Date();
  respuesta: string = '';

  constructor(private apiService: ApiService) { }

  consultarFestivo() {
    const fechaISO = new Date(this.fechaSeleccionada);

    //Verifica si la fecha es válida
    if (isNaN(fechaISO.getTime())) {
      console.error('Fecha seleccionada no es un formato de fecha válido');
      Swal.fire('Fecha Inválida', 'Por favor, ingrese una fecha válida.', 'warning');
      return;
    }

    const año = fechaISO.getFullYear();
    const mes = fechaISO.getMonth() + 1;
    const dia = fechaISO.getDate();
    
    this.apiService.verificarFestivo(año, mes, dia)
    .subscribe({
      next: response => {
        window.alert(response);
      },
      error: error => {
        window.alert("Error al verificar festivo");
      }
  });

  }
}


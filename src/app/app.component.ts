

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDiasFestivos';
  buttonColor: 'accent' | 'primary' = 'accent';
  buttonColor2: 'accent' | 'primary' = 'accent';
  mostrarConsultarFecha: boolean = false;
  mostrarListarFechas: boolean = false;

  mostrarConsultarFestivo() {
    if (this.buttonColor == 'accent') {
      this.buttonColor = 'primary';
      this.mostrarConsultarFecha = true;
      this.mostrarListarFechas = false;
    } else {
      this.buttonColor = 'accent';
      this.mostrarConsultarFecha = false;
    }

    if (this.buttonColor2 == 'primary') {
      this.buttonColor2 = 'accent';
    }
  }

  mostrarListarFestivo() {
    if (this.buttonColor2 == 'accent') {
      this.buttonColor2 = 'primary';
      this.mostrarConsultarFecha = false;
      this.mostrarListarFechas = true;
    } else {
      this.buttonColor2 = 'accent';
      this.mostrarListarFechas = false;
    }

    if (this.buttonColor == 'primary') {
      this.buttonColor = 'accent';
    }
  }
}

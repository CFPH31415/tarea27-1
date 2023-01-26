import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto27-1';
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  operacion(tipo: string) {
    if (tipo === 'suma') {
      this.resultado = this.valor1 + this.valor2;
    } else if (tipo === 'resta') {
      this.resultado = this.valor1 - this.valor2;
    } else if (tipo === 'multiplicacion') {
      this.resultado = this.valor1 * this.valor2;
    } else if (tipo === 'division') {
      this.resultado = this.valor1 / this.valor2;
    }
  }
}
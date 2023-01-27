import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static resultado(resultado: any) {
    throw new Error('Method not implemented.');
  }
  static valor1: number;
  static valor2: number;
  static operar(arg0: string) {
    throw new Error('Method not implemented.');
  }
  title = 'proyecto27-1';
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  operar(tipo: string) {
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
import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent {
  ventasNetas: number = 421412.3123;
  porcentaje: number = 0.2623;
}

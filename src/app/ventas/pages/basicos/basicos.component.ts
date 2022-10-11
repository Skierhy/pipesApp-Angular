import { Component } from '@angular/core';

/* Un decorador que se utiliza para definir los metadatos de la clase. */
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent {
  nombreLower: string = 'Leonardo';
  nombreUpper: string = 'LEONARDO';
  nombreCompleto: string = 'LeOnArDo NoLascO';

  fecha: Date = new Date(); // fecha de hoy
}

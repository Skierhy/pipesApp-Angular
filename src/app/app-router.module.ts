import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
/* Importación de los componentes que se utilizarán en las rutas. */
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

/* Definición de rutas para la aplicación. */
const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    // pathMatch: 'full', sirve para que la ruta sea exacta
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}

import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule],
})
export class PrimeNgModule {}

import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    CardModule,
  ],
})
export class PrimeNgModule {}

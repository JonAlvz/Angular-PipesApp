import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [MenuComponent, MenuBarComponent],
  imports: [CommonModule, MenuModule, PrimeNgModule],
  exports: [MenuComponent, MenuBarComponent],
})
export class SharedModule {}

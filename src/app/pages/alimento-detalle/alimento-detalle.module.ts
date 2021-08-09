import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentoDetallePageRoutingModule } from './alimento-detalle-routing.module';

import { AlimentoDetallePage } from './alimento-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentoDetallePageRoutingModule
  ],
  declarations: [AlimentoDetallePage]
})
export class AlimentoDetallePageModule {}

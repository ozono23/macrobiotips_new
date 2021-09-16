import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentoDetallePage } from './alimento-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentoDetallePageRoutingModule {}

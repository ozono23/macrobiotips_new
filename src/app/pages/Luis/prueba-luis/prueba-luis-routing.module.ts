import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaLuisPage } from './prueba-luis.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaLuisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaLuisPageRoutingModule {}

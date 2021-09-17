import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsCoockingPage } from './ingredients-coocking.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsCoockingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsCoockingPageRoutingModule {}

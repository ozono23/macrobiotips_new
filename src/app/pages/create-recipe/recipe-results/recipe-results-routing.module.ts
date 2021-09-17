import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeResultsPage } from './recipe-results.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeResultsPageRoutingModule {}

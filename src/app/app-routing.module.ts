import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
  {
    path: 'basic-info',
    loadChildren: () => import('./pages/create-recipe/basic-info/basic-info.module').then( m => m.BasicInfoPageModule)
  },
  {
    path: 'ingredients-coocking',
    loadChildren: () => import('./pages/create-recipe/ingredients-coocking/ingredients-coocking.module').then( m => m.IngredientsCoockingPageModule)
  },
  {
    path: 'recipe-results',
    loadChildren: () => import('./pages/create-recipe/recipe-results/recipe-results.module').then( m => m.RecipeResultsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeResultsPageRoutingModule } from './recipe-results-routing.module';

import { RecipeResultsPage } from './recipe-results.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeResultsPageRoutingModule,
    SharedModule
  ],
  declarations: [RecipeResultsPage]
})
export class RecipeResultsPageModule {}

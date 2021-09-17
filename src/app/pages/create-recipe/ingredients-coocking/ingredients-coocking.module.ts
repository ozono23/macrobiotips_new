import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsCoockingPageRoutingModule } from './ingredients-coocking-routing.module';

import { IngredientsCoockingPage } from './ingredients-coocking.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsCoockingPageRoutingModule,
    SharedModule
  ],
  declarations: [IngredientsCoockingPage]
})
export class IngredientsCoockingPageModule {}

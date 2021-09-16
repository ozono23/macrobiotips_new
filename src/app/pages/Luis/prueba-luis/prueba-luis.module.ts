import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaLuisPageRoutingModule } from './prueba-luis-routing.module';

import { PruebaLuisPage } from './prueba-luis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaLuisPageRoutingModule
  ],
  declarations: [PruebaLuisPage]
})
export class PruebaLuisPageModule {}

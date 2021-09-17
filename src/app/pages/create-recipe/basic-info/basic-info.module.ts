import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicInfoPageRoutingModule } from './basic-info-routing.module';

import { BasicInfoPage } from './basic-info.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicInfoPageRoutingModule,
    SharedModule
  ],
  declarations: [BasicInfoPage]
})
export class BasicInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShowHidePasswordComponent } from '../components/show-hide-password/show-hide-password.component';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from '../components/table/table.component';



@NgModule({
  declarations: [
    ShowHidePasswordComponent
    , TableComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule
  ],
  exports: [
    TranslateModule
    , ShowHidePasswordComponent
    , TableComponent
  ]
})
export class SharedModule { }

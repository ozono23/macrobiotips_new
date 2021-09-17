import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShowHidePasswordComponent } from '../components/show-hide-password/show-hide-password.component';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from '../components/table/table.component';
import { SelectorComponent } from '../components/selector/selector.component';



@NgModule({
  declarations: [
    ShowHidePasswordComponent
    , TableComponent
    , SelectorComponent
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
    , SelectorComponent
  ]
})
export class SharedModule { }

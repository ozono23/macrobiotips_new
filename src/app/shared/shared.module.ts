import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShowHidePasswordComponent } from '../components/show-hide-password/show-hide-password.component';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from '../components/table/table.component';
import { SelectorComponent } from '../components/selector/selector.component';
import { DefaultPipe } from '../pipes/default.pipe';



@NgModule({
  declarations: [
    ShowHidePasswordComponent
    , TableComponent
    , SelectorComponent
    , DefaultPipe
  ],
  imports: [
    CommonModule
    , TranslateModule
    , IonicModule
  ],
  exports: [
    TranslateModule
    , ShowHidePasswordComponent
    , TableComponent
    , SelectorComponent
    , DefaultPipe
  ]
})
export class SharedModule { }

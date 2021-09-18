import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from 'src/app/animations/selector';
import { SelectorComponent } from 'src/app/components/selector/selector.component';
import { RecipeTime } from 'src/app/enums/recipe-time';
import { ModalsService } from 'src/app/services/modals.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit {

  constructor(
    private modalSvc:ModalsService,
  ) { }

  ngOnInit() {

  }

  async selectRecipeTime(){
    console.log(await this.modalSvc.selector(RecipeTime.getList(), 'recipeTime'));
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from 'src/app/animations/selector';
import { SelectorComponent } from 'src/app/components/selector/selector.component';
import { RecipeTime } from 'src/app/enums/recipe-time';
import { RecipeType } from 'src/app/enums/recipe-type';
import { Recipe } from 'src/app/models/recipe';
import { ModalsService } from 'src/app/services/modals.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit {

  constructor(
    private modalSvc:ModalsService,
    private sessionSvc:SessionService,
  ) { }

  recipe:Recipe

  ngOnInit() {
    this.recipe = this.sessionSvc.recipe;

  }

  async selectRecipeTime(){
    this.recipe.time  = await this.modalSvc.selector(RecipeTime.getList(), 'recipeTimeModal', this.recipe.title);
  }

  async selectRecipeType(){
    this.recipe.type  = await this.modalSvc.selector(RecipeType.getList(), 'recipeType', this.recipe.title);
  }


  start(){
    console.log(this.sessionSvc.recipe);
    
  }

}

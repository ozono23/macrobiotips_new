import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from 'src/app/animations/selector';
import { SelectorComponent } from 'src/app/components/selector/selector.component';
import { RecipeTime } from 'src/app/enums/recipe-time';
import { RecipeType } from 'src/app/enums/recipe-type';
import { Recipe } from 'src/app/models/recipe';
import { ModalsService } from 'src/app/services/modals.service';
import { SessionService } from 'src/app/services/session.service';
import { Flip } from 'number-flip'
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit, AfterViewInit {
  
  constructor(
    private modalSvc:ModalsService,
    private sessionSvc:SessionService,
    private utils:UtilsService
    ) { }

    flip: any;
  @ViewChild('dinners', { read: ElementRef }) private dinners: ElementRef;

  async ngAfterViewInit() {

    this.recipe.people = 1;
    await this.utils.wait(2)

    this.flip = new Flip({
      node: this.dinners.nativeElement,
      from: '01',
      duration: 0.4
    });


  }

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
  
  addDinner(){
    if(this.recipe.people>=99) return;
    this.recipe.people++;
    this.flip.flipTo({
      to: this.recipe.people
    });
  }

  restDinner(){
    if(this.recipe.people<=1) return;
    this.flip.flipTo({
      to: --this.recipe.people,
      direct: false
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from 'src/app/animations/selector';
import { SelectorComponent } from 'src/app/components/selector/selector.component';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit {

  constructor(
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
    this.modalCtrl
  .create({
    component: SelectorComponent,
    enterAnimation: enterAnimation,
    leaveAnimation: leaveAnimation,
  })
  .then((modal) => {
    modal.present();
  });
  }

}

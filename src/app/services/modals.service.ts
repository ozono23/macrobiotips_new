import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from '../animations/selector';
import { SelectorComponent } from '../components/selector/selector.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(
    private modalCtr:ModalController
  ) { }

  async selector(options:any[], prefix?:string, header?:string):Promise<any> {

    return new Promise((resolve, reject) => {
      if(prefix) prefix += '.'
      this.modalCtr.create({
        component: SelectorComponent,
        enterAnimation: enterAnimation,
        leaveAnimation: leaveAnimation,
        componentProps: {options, prefix, header}
      })
      .then((modal) => {
        modal.present();
        modal.onDidDismiss().then(response => {
          if(!response.data) {
            resolve(null);
          };    
          resolve(response.data);
        });
      });

    });

  }

}

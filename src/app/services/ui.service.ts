import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  constructor(
    private toastController: ToastController
    , private loadingController: LoadingController
    , private alert: AlertController
    , private utils:UtilsService) { }

  private async toast(message:string, duration:number = 3000, cssClass:string = 'simple') {
    const toast = await this.toastController.create({
      message, duration, cssClass
    });
    toast.present();
  }
    
  error(error:any, duration?:number): boolean{

    let message:string = "";
    console.error(error);   
    if (typeof error === "string") message = error;
    else message = error.code;

    this.utils.trans(message, null, 'err')?.then((traducido: string)=> {
      if(traducido) this.toast(traducido, duration, 'error');  
    });

    return false;
  }

  success(message?:string, params?:any, duration?:number): boolean{
    if(!message) return true;
    this.utils.trans(message, params, 'succ').then((traducido: string)=> {
      if(traducido) this.toast(traducido, duration);
    });
    return true;
  }

  info(message?:string, duration?:number) {
    this.utils.trans(message).then((traducido: string)=> {
      if(traducido) this.toast(traducido, duration);
    })
  }

  private loadingDialog: HTMLIonLoadingElement;
  async showLoading(msg?:string) {
    msg = await this.utils.trans(msg);
    this.loadingDialog = await this.loadingController.create({
      message: msg,
      duration: 10000
    });
    await this.loadingDialog.present();
  }

  hideLoading(){
    this.loadingDialog.dismiss();   
  }
  
  async confirm(text:string, confirmBtn:string = 'accept', params?:any):Promise<boolean> {
    const header = await this.utils.trans(text, null, 'modal-header');
    const message = await this.utils.trans(text, params, 'modal-body');
    confirmBtn = await this.utils.trans(confirmBtn);
    const cancelmBtn = await this.utils.trans('cancel');
    return new Promise(async resolve => {
      const alert = await this.alert.create({
        header, message,
        buttons: [
          {
            text: cancelmBtn,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(false);
            }
          }, {
            text: confirmBtn,
            handler: () => {
              resolve(true);
            }
          }
        ]
      });

      await alert.present();
    });
  }
  
  async modalInfo(msg:string){
    const header:string = await this.utils.trans(msg, null, 'modal-header');
    const body:string = await this.utils.trans(msg, null, 'modal-body');
    const alert = await this.alert.create({
      header: header,
      message: body,
      buttons: ['OK']
    });
    alert.present();
  }

}

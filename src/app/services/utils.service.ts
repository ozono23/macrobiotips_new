import { Injectable } from '@angular/core';
import { IonContent, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private translate:TranslateService
    , private toastController: ToastController
    , private platform: Platform){

  }
  
  trans(msg:string, params?:any, prefix?:string):Promise<string>{
    if(!msg) return null;
    if(prefix) msg = `${prefix}.${msg}`;
    return this.translate.get(msg, params).pipe(first()).toPromise();
  }

  wait(time:number = 100):Promise<null>{
    return new Promise(resolve => {
      setTimeout(function(){
        console.log("waited ", time);
        resolve(null);
      }, time);
    });
  }

  idGenerator():string{
    const currentTime = (new Date()).getTime();
    const randomString = this.randomString(6);
    return currentTime+randomString;
  }

  private randomString(length:number):string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//&%!?€$@
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 async goToBottom(content:IonContent, times:number=1){
   for(let i=0; i<times; i++){
     await this.wait(200);
     await content.scrollToBottom(200)    
   }
 }

 async copy(value:string, msgWord:string = "copied", vibrate:boolean = true){
    Clipboard.write({
      string: value
    });

    const translatedMsg = await this.trans(msgWord, null, 'copy');
    const message = `<ion-icon name="clipboard-outline"></ion-icon> ${translatedMsg}`;

    if(vibrate && this.platform.is('capacitor')) Haptics.impact({style: ImpactStyle.Medium});

    this.toastController.create({
      message
      , duration: 2000
      , cssClass: 'simple'
    }).then(toast => toast.present());
  }
}

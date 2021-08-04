import { Component, OnInit, ViewChild } from '@angular/core';
import { Animation , AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {
  

  public titular:string="Adapta tu dieta";
  public definicion:string="a las estaciones del año, a través de una aplicación macrobiótica interactiva";

  public textos:any[]=[
    {titulo:"Adapta tu dieta",subtitulo: "a las estaciones del año, a través de una aplicación macrobiótica interactiva"},
    {titulo:"Conoce tus características",subtitulo:"energéticas a través de un diagnóstico macrobiótico"},
    {titulo:"Conoce las características",subtitulo:"energéticas del medioambiental en el que habitas"},
    {titulo:"Navega",subtitulo:"a través de la base de datos de alimentos, condimentos y técnicas de aplicación para elaborar recetas armonizantes"}
  ];

  slideOpts = {
    autoplay:true,
    centerSlides:true,
    initialSlide: 0,
    speed: 400,
    loop:true
    
  };

  constructor(private animationCtrl:AnimationController) {
    
  }
  ngOnInit() {
    const animation: Animation = this.animationCtrl.create()
    .addElement(document.querySelector(".cuadro"))
    .easing("ease-in-out")
    .duration(1000)
    .direction("alternate")
    .iterations(Infinity)
    .keyframes([
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 1, transform: "scale(1.5)", opacity: "0.5" }
    ]);
    animation.play();
   
  }


}

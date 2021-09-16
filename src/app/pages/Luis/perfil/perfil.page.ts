import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil={
    sexo:"",
    edad:0,
    fisiologia1:0,
    fisiologia2:0,
    fisiologia3:0,
    fisiologia4:0,
    fisiologia5:0,
    personalidad1:0,
    personalidad2:0,
    personalidad3:0,
    personalidad4:0,
    personalidad5:0,
    personalidad6:0,
    personalidad7:0,
    personalidad8:0,
    habitoalimentario:"",
    actividad:0,
    pais:"",
    latitud:"",
    climacalor:"",
    climafrio:"",
    humedad:0,
    sintoma01:0,
    sintoma02:0,
    sintoma03:0,
    sintoma04:0,
    sintoma05:0,
    sintoma06:0,
    sintoma07:0,
    sintoma08:0,
    sintoma09:0,
    sintoma10:0,
    sintoma11:0,
    sintoma12:0
  }
 
  slideOpts = {
    autoplay:false,
    initialSlide: 0
  }

  public edades:number[];

  omni=[
    {id:'OPE',valor:'Pescatariano'},
    {id:'ONMA',valor:'Excluye Marisco'},
    {id:'ONPE',valor:'Excluye Pescado'},
    {id:'OCM',valor:'Común'}
  ];
  vege=[
    {id:'VG',valor:'Vegano'},
    {id:'VO',valor:'Ovovegetariano'},
    {id:'VL',valor:'Lactovegetariano'},
    {id:'VOL',valor:'Ovolactovegetariano'}
  ];

  pais=[
    {id:'sp',valor:'España'},
    
  ]
  
  constructor() { }

  ngOnInit() {
    this.edades=[18];
    for(let i=19 ; i<130;i++)
      this.edades.push(i);
  }

}
 /*
 $scope.omni=[
    {id:'OPE',valor:'Pescatariano'},
    {id:'ONMA',valor:'Excluye Marisco'},
    {id:'ONPE',valor:'Excluye Pescado'},
    {id:'OCM',valor:'Común'}
  ];
  $scope.vege=[
    {id:'VG',valor:'Vegano'},
    {id:'VO',valor:'Ovovegetariano'},
    {id:'VL',valor:'Lactovegetariano'},
    {id:'VOL',valor:'Ovolactovegetariano'}
  ];

  filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
});

var fecha = new Date();
    var msj;
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    var mes = month[fecha.getMonth()];
    
    //Calcula la estación del año según mes
    if(fecha.getMonth() > 1 & fecha.getMonth()<5) 
    {  //4MAR-15MAY
      if(fecha.getMonth()==2){
        if(fecha.getDate()>3 ) msj = "PRIMAVERA";
        else  msj="INVIERNO";
      }
      else if(fecha.getMonth()==4){
        if(fecha.getDate()<16) msj = "PRIMAVERA";
        else msj="VERANO";
      }
      else msj = "PRIMAVERA";
    } 
    else if (fecha.getMonth() > 3 &fecha.getMonth() < 7) {
      //16MAY-27JUL
      if(fecha.getMonth()==4){
        if(fecha.getDate()>15 ) msj = "VERANO";
        else  msj="PRIMAVERA";
      }
      else if(fecha.getMonth()==6){
        if(fecha.getDate()<28) msj = "VERANO";
        else msj="VERANO TARDÍO";
      }
      else msj = "VERANO";
      
      } 
    else if (fecha.getMonth() > 5 &fecha.getMonth() < 10) { 
      //28JUL-8OCT
      if(fecha.getMonth()==6){
        if(fecha.getDate()>27 ) msj = "VERANO TARDÍO";
        else  msj="VERANO";
      }
      else if(fecha.getMonth()==9){
        if(fecha.getDate()<9) msj = "VERANO TARDÍO";
        else msj="OTOÑO";
      }
      else msj = "VERANO TARDÍO";
      
    } 
    else if (fecha.getMonth() > 8 &fecha.getMonth() < 12) { 
      //9OCT-21DIC
       if(fecha.getMonth()==9){
        if(fecha.getDate()>8 ) msj = "OTOÑO";
        else  msj="VERANO TARDÍO";
      }
      else if(fecha.getMonth()==11){
        if(fecha.getDate()<22) msj = "OTOÑO";
        else msj="INVIERNO";
      }
      else msj = "OTOÑO";
    } 
    else

    { msj = "INVIERNO";} //22DIC-3MAR

    //Muestra la info
    document.getElementById("msj").innerHTML    = msj;
    
    document.getElementById("fecha").innerHTML =" Día "+fecha.getDate()+" de "+mes+" del año "+fecha.getFullYear();

  */
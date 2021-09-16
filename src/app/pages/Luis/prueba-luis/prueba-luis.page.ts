import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router } from '@angular/router';
import { LoginResponse, IAlimentos,ITtipoAlimentos } from '../../other/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-prueba-luis',
  templateUrl: './prueba-luis.page.html',
  styleUrls: ['./prueba-luis.page.scss'],
})
export class PruebaLuisPage implements OnInit {
  public luis:IAlimentos
  public listaAlimentos : ITtipoAlimentos
  constructor(private _api:ApiService, private _router: Router) { }
  comprobarBoton (dato:any) {
   
  }
  loadfood () {
   
    const user= (document.querySelector('#textoBusquedaAlimento') as HTMLInputElement).value
    const password = (document.querySelector('#lalista') as HTMLSelectElement).value
//const password="1"
    

   

   // console.log("la passwor1d")
   // console.log(password)
  
  this._api.loadFood2(user,password).subscribe(response =>{
    if (response.success==true){
     
    
      
    }
    else
    {
    

    }
     this.luis = response  // DESCOMENTARRRRRRRRRRRRR
    console.log(this.luis)

    })

  }
  ngOnInit() {
    this._api.loadTipoAlimentos("1","hola").subscribe(response =>{
      if (response){
       
       // console.log(response.success)
       // console.log('hola' + response.user)
  
       
         console.log("cargados bien los datos")
        
      }
      else
      {
        console.log(response)
       // console.log(response)
       // console.log(response[2])
        //console.log("tenemos los alimentos")
       
      }
       this.listaAlimentos = response  // DESCOMENTARRRRRRRRRRRRR
  
  //console.log(this.listaAlimentos)

      })
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ApiService} from '../../../services/api.service';

import { FnParam } from '@angular/compiler/src/output/output_ast';
import { stringify } from 'querystring';
import { identifierModuleUrl } from '@angular/compiler';
import { IAlimento } from 'src/app/models/interfaces';


@Component({
  selector: 'app-alimento-detalle',
  providers: [ApiService],
  templateUrl: './alimento-detalle.page.html',
  styleUrls: ['./alimento-detalle.page.scss'],
})
export class AlimentoDetallePage implements OnInit {
  public datoo: IAlimento
  constructor(private activatedRoute:ActivatedRoute,private _api:ApiService) { 

  

  }

  ngOnInit() {

    var elid:string

    this.activatedRoute.paramMap.subscribe(paramMap =>{ 
  if (!paramMap){
    console.log("error")
  } 
  else
  {
    elid = paramMap.get('id')
  
  }
  })

    this._api.loadUnAlimento(elid,"hola").subscribe(response =>{
      if (response){
       
        
     
        
      }
      else
      {
        
       
      }
     

      this.datoo = response
      
      console.log(this.datoo[0].tipo)
      console.log(this.datoo[0].name)

      })

  }

}

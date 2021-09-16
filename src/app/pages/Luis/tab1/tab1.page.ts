import { Component } from '@angular/core';
import { IReceta } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private _api:ApiService) { }
  public ListaRecetas:IReceta

  cargarRecetas(id:any)
  {

    this._api.loadListaRecetas(id,"pass").subscribe(response =>{
      if (response){
         console.log("hemos cargado los  datos"+ id) 
      }
      else
      {
        console.log(response) 
      }
      this.ListaRecetas = response  // DESCOMENTARRRRRRRRRRRRR
  

      })

  }
  
  ngOnInit() {
      }

}

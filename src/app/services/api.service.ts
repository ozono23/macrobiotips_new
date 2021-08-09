import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { IAlimento, IAlimentos, IReceta, ITtipoAlimentos, LoginResponse } from '../models/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
private _http : HttpClient

  ) { }
  loadListaRecetas(user:any,password:any) : Observable<IReceta>{
   
    return this._http.post<IReceta>('https://macrobiotips.com/apiCargarRecetas.php',{
      textoBusquedaAlimento : user,
      password : password
    })
  }

  
  
  loadFood2(user:any,password:any) : Observable<IAlimentos>{
    console.log("loadFood2")
    return this._http.post<IAlimentos>('https://macrobiotips.com/apiFoodV1.php',{
      textoBusquedaAlimento : user,
      password : password
    })

    
  }

  loadUnAlimento(user:any,password:any) : Observable<IAlimento>{
   
    console.log("load un alimento ")
        return this._http.post<IAlimento>('https://macrobiotips.com/apiCargarUnAlimento.php',{
          textoBusquedaAlimento : user,
          password : password
        })
  }

  


  loadTipoAlimentos(user:any,password:any) : Observable<ITtipoAlimentos>{
   
    console.log("load un tipos alimento ")
        return this._http.post<ITtipoAlimentos>('https://macrobiotips.com/apiCargarTipoAlimento.php',{
          textoBusquedaAlimento : user,
          password : password
        })
    
        
      }
  

  login2(user:any,password:any) : Observable<LoginResponse>{

    return this._http.post<LoginResponse>('https://macrobiotips.com/index3.php',{
      user : user,
      password : password
    })

    
  }
}

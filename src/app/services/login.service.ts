import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/interfaces';

export class User {
  constructor(
    public email: string,
    public password: string
    ) { }
}

var users = [
  new User('admin@admin.com','123'),
  new User('usuario1@gmail.com','456')
];

@Injectable()
export class LoginService {

  public logado:boolean;

  constructor(private _router: Router,private _http : HttpClient){}

  logout() {
    localStorage.removeItem("user");
    this.logado=false;
    this._router.navigate(['/']);

  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      //Encryptar antes 
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['/folder/perfil']);
      this.logado=true;
      return true;
    }
    return false;

  }

  logar(user){
    localStorage.setItem("user", user.email);
      this._router.navigate(['/folder/perfil']);
      this.logado=true;
      return true;
  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        
        return false;
    }
  else return true;
  }
  login2(user:any) : Observable<LoginResponse>{

    return this._http.post<LoginResponse>('https://macrobiotips.com/index3.php',{
      user : user.email,
      password : user.password
    })

  }
}
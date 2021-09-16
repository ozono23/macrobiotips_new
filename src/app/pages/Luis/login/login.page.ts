import { Component,ElementRef, OnInit } from '@angular/core';
import {LoginService, User} from '../../services/login.service';
import { Router } from '@angular/router';
//import {Validators, FormBuilder, FormGroup } from '@angular/forms';
//import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-login',
  providers: [LoginService], //,ApiService
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = new User('','');
    public errorMsg = '';

    constructor(private _service:LoginService, private _router: Router) { //, private _service2:ApiService

    }

    login() {
      /*if(!this._service.login(this.user)){ 
          this.errorMsg = 'Failed to login';
      }
      else
      this.errorMsg = 'Logged';
      */
    
      this._service.login2(this.user).subscribe(response =>{
        
        if (response.success){
          this.errorMsg = 'Logged';
          this._service.logar(this.user);
        }
        else
        {
         
          this.errorMsg = 'Failed to login';
        }
    
        })
  }

    ngOnInit() {
      this._service.checkCredentials();
    }

    logout() {
      this._router.navigate(['/folder/login']);
        this._service.logout();
    }
  }



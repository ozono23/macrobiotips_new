import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public _service:LoginService
    ) {}

    public selectedIndex = 0;
    public appPages = [    //Colocar aquí el menu de eatwell
      {
        title: 'Login',
        url: 'login',
        icon: 'person'
      },
      {
        title: 'Registrate',
        url: '/folder/Registro',
        icon: 'person-add'
      },
      {
        title: 'Información Estación del Año',
        url: '/folder/infoEstacion',
        icon: 'calendar'
      },
      {
        title: 'Contacto',
        url: '/folder/Contacto',
        icon: 'people'
      },
      {
        title: 'FAQS',
        url: '/folder/FAQS',
        icon: 'help'
      }
    ];
    public appPagesLogged = [    //Colocar aquí el menu de eatwell
      {
        title: 'Alimentos de Estación',
        url: '/folder/MisAlimentos',
        icon: 'cube'  //nutrition
      },
      {
        title: 'Mis recetas y Menús de Estación',
        url: '/folder/MisRecetas',
        icon: 'restaurant' 
      },
      {
        title: 'Perfil',
        url: '/profile',
        icon: 'settings'
      },
      {
        title: 'Elabora Recetas y Menús',
        url: '/folder/prueba-luis',
        icon: 'file-tray-stacked'  //color-fill
      },
      {
        title: 'Consulta la BD',
        url: '/folder/ConsultaBDD',
        icon: 'server'
      },
      {
        title: 'Mi Calendario',
        url: '/folder/FAQS',
        icon: 'calendar'
      },
      {
        title: 'Lista de la Compra',
        url: '/folder/ListaCompra',
        icon: 'document-text'
      }
    ];
}

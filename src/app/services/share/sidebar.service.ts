import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any =[
    {
      titulo:'Menu Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        { titulo:'Dashboard', url:'/dashboard'},
        { titulo:'Progress', url:'/progress'},
        { titulo:'Graficas', url:'/graficas1'},
        { titulo:'Promesas', url:'/promesas'},
        { titulo:'Rxjs', url:'/rxjs'}
        
      ]
  
    }
  ];
  constructor() { }
}
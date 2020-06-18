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
        { titulo:'dashboard', url:'/dashboard'},
        { titulo:'progress', url:'/progress'},
        { titulo:'graficas', url:'/graficas1'}
        
      ]
  
    }
  ];
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  usuarioActual:Usuario;
  constructor(public sidebarService: SidebarService, private usuarioService:UsuarioService) {
    this.usuarioActual = this.usuarioService.usuarioLog as Usuario;
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
  }

}

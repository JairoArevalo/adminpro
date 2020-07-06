import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.models';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioActual: Usuario;
  constructor(private usuarioService: UsuarioService) {
    
    this.usuarioActual = this.usuarioService.usuarioLog as Usuario;
    
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
  }

}


// this.usuarioService.usuarioLog.nombre,
// this.usuarioService.usuarioLog.email,
// this.usuarioService.usuarioLog.password,
// this.usuarioService.usuarioLog.img,
// this.usuarioService.usuarioLog.role,
// this.usuarioService.usuarioLog.google,
// this.usuarioService.usuarioLog.id
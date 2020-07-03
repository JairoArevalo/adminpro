import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  constructor(public sidebarService: SidebarService, private usuarioService:UsuarioService) {
    
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SharedService, SidebarService, LoginGuardGuard, SubirArchivoService } from "./service.index";
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers:[
    SettigsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService
  ]
})
export class ServiceModule { }

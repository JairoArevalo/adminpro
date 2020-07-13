import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SharedService, SidebarService, 
          LoginGuardGuard, SubirArchivoService, HospitalesService, MedicoService } from "./service.index";
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';






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
    SubirArchivoService,
    ModalUploadService,
    HospitalesService,
    MedicoService
  ]
})
export class ServiceModule { }

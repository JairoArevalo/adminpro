import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SharedService, SidebarService, 
          LoginGuardGuard, SubirArchivoService, HospitalesService,
          AdminGuard, MedicoService } from "./service.index";
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { RenuevaTokenGuard } from './guards/renueva-token.guard';







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
    RenuevaTokenGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalesService,
    MedicoService
  ]
})
export class ServiceModule { }

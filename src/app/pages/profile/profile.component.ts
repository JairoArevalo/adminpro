import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/service.index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario:any;
  imagenSubir:File;
  imagenTemp:any;
  
  constructor(private usuarioService:UsuarioService, public fb :FormBuilder) {
    this.usuario = this.usuarioService.usuarioLog;

   }

  ngOnInit(): void {
  }

  guardar(usuario: Usuario){
    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;
    usuario.id = this.usuario._id;
    usuario.role = this.usuario.role;
    
    this.usuarioService.actualizarUsuario(usuario).subscribe((data)=>{
      
      this.usuario = data;
      Swal.fire({
        icon: 'success',
        title: 'Usuario Actualizado',
        text: data.email,
        footer: 'Continua !!'
      })
      

    })
    
  }
  
  seleccionImage(archivo: File){
    if (!archivo) {
      this.imagenSubir = null;
      return
    }
    if (archivo.type.indexOf('image')<0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'El archivo no es una imagen',
        footer: 'Vuelve a intentar !!'
      })
    }
    this.imagenSubir = archivo;
    let reader= new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = ()=>{
      this.imagenTemp = reader.result;
    }
    
  }

  cambiarImagen(){
    this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }
 
}

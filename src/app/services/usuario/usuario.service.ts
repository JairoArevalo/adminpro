import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioLog: Usuario;
  token:string;
  constructor( public http: HttpClient, public router:Router) {
    this.cargarStorage();
   }

  guardarStorage( id:string, token:string, usuario:Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token',token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioLog = usuario;
    this.token = token;
  }


  crearUsuario( usuario:Usuario ){

    let url = URL_SERVICIOS+'/usuario';

    return this.http.post( url, usuario).pipe(
      map((data: any)=>{
        return data.body;
      })
    )
 
  }


  loginUsuario(usuario:Usuario, recordar:boolean){
    let url = URL_SERVICIOS+'/login';
    if (recordar ) {
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    return this.http.post(url, usuario).pipe(
      map((data:any)=>{
        this.guardarStorage(data.id, data.token, data.usuario);
        return data.usuario;
      })
    )

  }


  loginUsuarioGoogle(token:string){
    let url = URL_SERVICIOS+'/login/google';
    
    return this.http.post(url, {token}).pipe(
      map((data:any)=>{
        this.guardarStorage(data.usuario._id, data.token, data.usuario as Usuario);
        
        return data.usuario;
      })
    )
  }

  cargarStorage(){
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuarioLog = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuarioLog = null;
    }
  }

  estaLogueado(){
    if (this.token.length > 5) {
      return true
    }else{
      return false
    }
  }

  logout(){
    this.usuarioLog = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);

  }

}
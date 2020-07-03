import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

declare function initPluggins();
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  auth2:any;
  constructor(public router:Router, public fb: FormBuilder, public usuarioService: UsuarioService) { 

    this.formulario = this.fb.group({
      
      correo: ['@gmail.com',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      recordar:[false]
    })

  }

  ngOnInit(): void {
    initPluggins();
    this.googleInit();
    if (localStorage.getItem('email')) {
      this.formulario.setValue({correo: localStorage.getItem('email'), password:null, recordar:true})

    }

  }

  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        clientId: '676907084933-2a5iclggtohasge1fuhgd7e1maiip2p2.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
      this.attachSingIn(document.getElementById('btnGoogle'));
    } );
  }

  attachSingIn( element ){
    this.auth2.attachClickHandler( element, {}, (googleUser) =>{
      let token = googleUser.getAuthResponse().id_token;
        
      this.usuarioService.loginUsuarioGoogle(token).subscribe((data)=>{
        window.location.href = '/dashboard'
        
      })
      
    } )
  }

  ingresar(){
    
    if (!this.formulario.valid) {
      return
    }
    let usuario = new Usuario( 
      null,
      this.formulario.value.correo,
      this.formulario.value.password
      
      );
    this.usuarioService.loginUsuario(usuario, this.formulario.value.recordar).subscribe((data)=>{
      // console.log(data);
      
      this.router.navigate(['/dashboard']);
      
    })
  }

}

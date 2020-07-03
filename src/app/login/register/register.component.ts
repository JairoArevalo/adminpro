import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.models';
import { Router } from '@angular/router';

//
declare function initPluggins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;

  constructor(public fb: FormBuilder, public usuarioService: UsuarioService, public router:Router) {
    
    this.formulario = this.fb.group({
      nombre: ['',Validators.required],
      correo: ['@gmail.com',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      password2: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      condiciones:[false]
    },{validators: this.sonIguales('password','password2') })

   }

  ngOnInit(): void {
    initPluggins();
  }

  sonIguales(campo1:string, campo2:string){
    return (group: FormGroup)=>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null
      }

      return {
        sonIguales: true
      } 

    }
  }

  registrarUsuario(){
    
    if ( !this.formulario.value.condiciones ) {
      Swal.fire({
        title: 'Error!',
        text: 'Debe aceptar los terminos y Condiciones de uso',
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      return
    }
    let usuario = new Usuario(

      this.formulario.value.nombre,
      this.formulario.value.correo,
      this.formulario.value.password
    );

    this.usuarioService.crearUsuario(usuario).subscribe((data:any)=>{
      console.log('Usuario Sercive', data);
      this.formulario.reset();
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado',
        text: data.email,
        footer: 'Puede ingresar'
      })
      this.router.navigate(['/login']);
      
    })
    

  

  }

}

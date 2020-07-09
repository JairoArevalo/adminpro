import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[]=[];
  desde:number = 0;
  totalRegistros: number = 0;
  cargando:boolean = true;
  constructor( private usuarioService:UsuarioService, public modalService: ModalUploadService ) {
   
   }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.modalService.notificaciones.subscribe((data)=>{ 
      this.cargarUsuarios();
      Swal.fire({
        icon: 'success',
        title: 'Usuario Actualizado',
        text: data.usuario.email,
        footer: 'Continua !!'
      })
    })
  }

  cargarUsuarios(){
    this.cargando = true;
    this.usuarios.length = 0;
    this.usuarioService.cargarUsuarios(this.desde).subscribe((data:any)=>{
      this.totalRegistros = data.total;
      this.usuarios = data.usuarios;
      this.cargando = false;
      
    })
  }

  cambiarDesde(valor:number){
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros) {
      return
    }
    if (desde < 0) {
      return
    }
    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string){
    if (termino == null || termino == '') {
      this.cargarUsuarios();
      return
    }
    this.usuarioService.buscarUsuarios(termino).subscribe((data:any)=>{
      this.usuarios.length = 0;
      this.usuarios = data.usuarios;
      
    })
    
  }

  borrarUsuario(usuario){
    // console.log(usuario);
    if (usuario.email === this.usuarioService.usuarioLog.email) {
      Swal.fire({
        icon: 'error',
        title: 'No se puede realizar la eliminación',
        text: 'Un usuario no puede eliminarse a si mismo',
        footer: 'Intente de nuevo'
      })
      return
    }
    Swal.fire({
      title: 'Esta seguro de elmiminar este usuario?',
      text: "Sera elmininado permanentemente el usuario: "+ usuario.email,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.borrarUsuario(usuario).subscribe((data:any)=>{
          console.log(data);
 
          Swal.fire(
            'Borrado!',
            'Es usuario ha sido eliminado: '+ data.usuario.email,
            'success'
            
          )
          this.cargarUsuarios();
        })
       
      }
      
      
    })
    
  }

  guardarUsuario(usuario){
    usuario.id = usuario._id;
    
    this.usuarioService.actualizarUsuario(usuario).subscribe((data)=>{
      this.cargarUsuarios();
      Swal.fire({
        icon: 'success',
        title: 'El usuario ha sido actualizado',
        text: 'Usuario: '+ data.email,
        footer: 'Continue'
      })

      
    })
    
  }

  mostarModal(id:string){
    this.modalService.mostrarModal('usuarios',id);
  }
}

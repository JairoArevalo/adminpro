import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from 'src/app/models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  urlServicio = URL_SERVICIOS;
  constructor(public http:HttpClient, public usuarioService: UsuarioService) { }

  cargarMedicos(){
    let url = `${this.urlServicio}/medico`;
    return this.http.get(url)
  }

  buscarMedico(termino:string){
    let url = `${this.urlServicio}/busqueda/coleccion/medicos/${termino}`;
    return this.http.get(url)
  }

  borrarMedico(id:string){
    let token = this.usuarioService.token;
    let url = `${this.urlServicio}/medico/${id}?token=${token}`;
    return this.http.delete(url);

  }

  guardarMedico(medico:Medico){
    let token = this.usuarioService.token;
    if (medico._id) {
      //Actualizando
      let urlActualizar = `${this.urlServicio}/medico/${medico._id}?token=${token}`;
      return this.http.put(urlActualizar, medico)
      
    } else {
      //Creando
      let url = `${this.urlServicio}/medico?token=${token}`;
      if (medico.img == '' || medico.img == null) {
        medico.img = null
      }
      return this.http.post(url, medico)

    }
  }

  cargarMedico(id:string){
    let url = `${this.urlServicio}/medico/${id}`;
    return this.http.get(url)

  }

}

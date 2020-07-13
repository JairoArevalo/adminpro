import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Hospital } from 'src/app/models/hospital.model';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  urlServicio = URL_SERVICIOS;
  constructor(public http: HttpClient, public usuarioService:UsuarioService) { }

  //Metodos del servicio

  cargarHospitales(){
    let url = `${this.urlServicio}/hospital`;
    return this.http.get(url)
  }

  borrarHospital(id:string){
    let token = this.usuarioService.token;
    let url = `${this.urlServicio}/hospital/${id}?token=${token}`;
    return this.http.delete(url)
  }

  crearHospital(nombre:string){
    let token = this.usuarioService.token;
    let url = `${this.urlServicio}/hospital?token=${token}`;
    return this.http.post(url, {nombre})
  }

  buscarHospital(termino:string){
    let url = `${this.urlServicio}/busqueda/coleccion/hospitales/${termino}`;
    return this.http.get(url)
  }

  actualizarHospital(hospital:Hospital){
    let token = this.usuarioService.token;
    let url = `${this.urlServicio}/hospital/${hospital._id}?token=${token}`;
  
    return this.http.put(url, hospital)
  }

  //Implemeneto adicional

  obtenerHospital(id:string){
    let url = this.urlServicio+'/hospital/'+id;
    return this.http.get(url);
  }

}

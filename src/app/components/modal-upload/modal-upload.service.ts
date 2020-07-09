import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {
  tipo:string;
  id:string;
  public oculto: string = 'oculto';
  public notificaciones = new EventEmitter<any>(); 
  constructor() { }

  ocultarModal(){
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;

  }

  mostrarModal(tipoUsuario:string, id:string){
    this.oculto = '';
    this.id = id;
    this.tipo = tipoUsuario;
  }
}

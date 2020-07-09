import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SubirArchivoService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
  oculto:string;
  imagenSubir:File;
  imagenTemp:any;
  constructor(public subirArchivoService: SubirArchivoService, public modalService: ModalUploadService) {
    this.oculto = this.modalService.oculto;
    
   }

  ngOnInit(): void {
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

  subirImagen(){
    this.subirArchivoService.subirArchivo(this.imagenSubir, this.modalService.tipo, this.modalService.id)
                            .then((data)=>{
                              
                              this.modalService.notificaciones.emit(data);
                              this.cerrar();
                              
                            }).catch((err)=>{
                              console.log(err);
                              
                            })
  }

  cerrar(){
    this.modalService.ocultarModal();
    this.oculto = this.modalService.oculto;
    this.imagenTemp = null;
    this.imagenSubir = null;

  }
}

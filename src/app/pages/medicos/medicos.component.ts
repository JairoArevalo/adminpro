import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  medicos:Medico[]=[];
  totalMedicos:number;
  constructor(private medicoService:MedicoService) { 
    this.cargarListaMedicos();
  }

  ngOnInit(): void {
  }


  buscarMedico(termino:string){
    if (termino == null || termino == '') {
      this.cargarListaMedicos();
      return
    }
    this.medicoService.buscarMedico(termino).subscribe((data:any)=>{
      this.medicos = data.medicos;
      this.totalMedicos = data.total;
    })
  }
 

  cargarListaMedicos(){
    this.medicoService.cargarMedicos().subscribe((data:any)=>{
      this.medicos = data.medicos;
      this.totalMedicos = data.total;
      
    })
  }

  actualizarImagen( medico:Medico ){

  }

  borrarMedico(medico:Medico){
    Swal.fire({
      title: 'Esta seguro de elmiminar este Medico?',
      text: `Sera elmininado permanentemente el Medico: ${medico.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.medicoService.borrarMedico(medico._id).subscribe((data:any)=>{
          
 
          Swal.fire(
            'Borrado!',
            'El Medico ha sido eliminado: '+ data.medico.nombre,
            'success'
            
          )
          this.cargarListaMedicos();
        })
       
      }

    })
  }

}

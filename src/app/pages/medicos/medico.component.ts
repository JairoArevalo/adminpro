import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicoService, HospitalesService } from 'src/app/services/service.index';
import { Hospital } from 'src/app/models/hospital.model';
import { Medico } from 'src/app/models/medico.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  hospitales: Hospital[] = [];
  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('');
  editar:boolean = false;
  constructor(private medicoService:MedicoService, private hospitalService: HospitalesService,
              private router:Router, public activeRute: ActivatedRoute, 
              public modalService: ModalUploadService) {
                this.activeRute.params.subscribe((data)=>{
                  let id = data['id'];
                  if (id != 'nuevo' ) {
                    this.cargarMedico(id);
                    this.editar = true
                  }
                })

               }

  ngOnInit(): void {
    this.hospitalService.cargarHospitales().subscribe((data:any)=>{
      this.hospitales = data.hospitales;
      
    })
  }

  guardarMedico( f: NgForm ) {

    if ( f.invalid ) {
      return;
    }

   if (this.editar == false) {
    this.medicoService.guardarMedico(this.medico).subscribe((data:any)=>{
      
      Swal.fire({
        title:`El médico ha sido creado :${data.body.nombre}`,
        icon: 'success',
        text:'Continue',
        timer: 2000
      })
      this.medico = data.body;
      this.router.navigate(['/medico', data.body._id])
      
    })
   } else {
    this.medicoService.guardarMedico(this.medico).subscribe((data:any)=>{

      Swal.fire({
        title:`El médico ha sido creado :${data.medico.nombre}`,
        icon: 'success',
        text:'Continue',
        timer: 2000
      })
      this.medico = data.medico;
      this.router.navigate(['/medico', data.medico._id])
      
    })
   }

  }

  cambioHospital(event:any){
    let id = event.target.value;
    this.hospitalService.obtenerHospital(id).subscribe((data:any)=>{
        this.hospital = data.hospital;
        
    })
  }

  cargarMedico( id ){
    this.medicoService.cargarMedico(id).subscribe((data:any)=>{
      this.medico = data.medico;
      this.hospital = data.medico.hospital;
      this.medico.hospital = data.medico.hospital._id;
      
      
    })
  }

  cambiarFoto(){
    this.modalService.mostrarModal('medicos', this.medico._id);
    this.modalService.notificaciones.subscribe((data)=>{
      Swal.fire({
        title:`El médico ha sido Actualizado :${data.medico.nombre}`,
        icon: 'success',
        text:'Continue',
        timer: 2000
      })
      this.medico = data.medico
    })
  }

}

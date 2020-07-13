import { Component, OnInit } from '@angular/core';
import { HospitalesService } from 'src/app/services/service.index';
import { Hospital } from 'src/app/models/hospital.model';
import Swal from 'sweetalert2';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  hospitales:Hospital[]=[];
  cargando:boolean = true;
  totalHospitales: number = 0;
  constructor(private hospitalService:HospitalesService, public modalService:ModalUploadService) {
    this.cargarLista();  
  }

  ngOnInit(): void {
    
  }

  crearHospital(){
    const ipAPI = '//api.ipify.org?format=json';
    let nombreHospital:string;
    (async () => {

      
      const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip)
      
      const { value: nombreHospital } = await Swal.fire({
        title: 'Ingrese el nombre del Hospital',
        input: 'text',
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Necesita escribir un nombre!'
          }
        }
      })
      
      if (nombreHospital) {
        
        //Llamar servicio para crear hospital
        this.hospitalService.crearHospital(nombreHospital as string).subscribe((data)=>{
          Swal.fire(`Hospital creado :  ${nombreHospital}`)
          this.cargarLista();

        })

      }
      
    })()
    
  }

  cargarLista(){
    this.hospitalService.cargarHospitales().subscribe((data:any)=>{
      this.hospitales = data.hospitales;
      this.totalHospitales = data.total;
      this.cargando = false;

    })
  }

  elminarHospital(hospital:Hospital){
      Swal.fire({
        title: 'Esta seguro de elmiminar este hospital?',
        text: "Sera elmininado permanentemente el hospila: "+ hospital.nombre,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.hospitalService.borrarHospital(hospital._id).subscribe((data:any)=>{
            
   
            Swal.fire(
              'Borrado!',
              'El hospital ha sido eliminado: '+ data.hospital.nombre,
              'success'
              
            )
            this.cargarLista();
          })
         
        }
  
      })
  }

  buscarHospital(termino:string){
    if (termino == null || termino == '') {
      this.cargarLista();
      return
    }
    this.hospitalService.buscarHospital(termino).subscribe((data:any)=>{
      this.hospitales = data.hospitales;
      this.totalHospitales = this.hospitales.length;
      
      
    })
  }
          
  editarHospital(hospital:Hospital){
    Swal.fire({
      title: 'Esta seguro de editar este hospital?',
      text: `Se cambiará a : ${hospital.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar'
    }).then((result) => {
      if (result.value) {
        this.hospitalService.actualizarHospital(hospital).subscribe((data:any)=>{
          
          // console.log(data);
          
          Swal.fire(
            'Editado!',
            'El hospital ha sido Modificado: '+ data.hospital.nombre,
            'success'
            
          )
          this.cargarLista();
        })
       
      }

    })
  }

  actualizarImagen( hospital: Hospital ) {

    this.modalService.mostrarModal( 'hospitales', hospital._id );
    this.modalService.notificaciones.subscribe(()=> this.cargarLista())
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.models';
import { Medico } from 'src/app/models/medico.model';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  usuarios:Usuario[]=[];
  medicos: Medico[]=[];
  hospitales: Hospital[]=[];
  constructor(public rutaActiva:ActivatedRoute, private http:HttpClient) {
    this.rutaActiva.params.subscribe((data)=>{
      
      this.buscar(data.termino);
      
    })
   }

  ngOnInit(): void {
  }

  buscar(termino:string){
    let ruta = `${URL_SERVICIOS}/busqueda/todo/${termino}`;
    
    this.http.get(ruta).subscribe((data:any)=>{
     
      this.usuarios = data.usuarios;
      this.medicos = data.medicos;
      this.hospitales = data.hospitales;
      
      
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    

    this.contarTres().then( ()=>{
      // console.log('Finalizado promesa');
      
    } ).catch((err)=>{
      console.info("Error en la proemsa", err)
    })
  }

  ngOnInit(): void {
  }

  contarTres(){
    let promesa = new Promise((resolve, reject)=>{
      let contador = 0;
      let intervalo = setInterval(()=>{
        // console.log(contador)
        contador = contador +1;
        if (contador == 3) {
          resolve('Termino ok');
          clearInterval(intervalo)
        }
      },500)
    });

    return promesa
  }
}

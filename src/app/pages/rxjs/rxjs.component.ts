import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry  } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { 
   
    
    this.funcionObs$().pipe(
      retry(4)
    ).subscribe((datos)=>{
      // console.log(datos);
      
    },(err)=>{
      console.log("error",err);
      
    },()=>{
      //Se ejecuta al completar el observer
      // console.log('complete');
      
    });
  }

  ngOnInit(): void {
  }

  funcionObs$():Observable<any>{
    let obs$ = new Observable( observer =>{
      let contador = 0
      let intervalo = setInterval(()=>{
        contador+=1;
        observer.next(contador);
        if (contador === 3) {
          observer.complete()
          clearInterval(intervalo);
        }

      },500);


    })

    return obs$
  }

}

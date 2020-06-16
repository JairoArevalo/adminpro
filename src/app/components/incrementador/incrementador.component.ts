import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') porcentaje:number = 0;
  @Output() cambioValor:EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef 
  @Input('nombre') mensaje:string = '';
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  onChanges(newValue:number){
    this.cambiarValor(newValue);
    if (newValue >= 101) {
      return this.porcentaje = 100;
    } else if ( newValue <= 0 || newValue == null) {
      return this.porcentaje = 0
    }else{
      
      this.porcentaje = newValue;
    }
    
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje)
  }
  
  cambiarValor(numero: number){
     
    if (this.porcentaje >= 100 && numero == 2  ) {
      return this.porcentaje = this.porcentaje;
    }
    if (this.porcentaje <= 0 && numero == -2) {
      return this.porcentaje = this.porcentaje;
    }
    this.porcentaje = this.porcentaje + numero;
    this.cambioValor.emit(this.porcentaje)
    this.txtProgress.nativeElement.focus()
  }
}

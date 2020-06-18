import { Component, OnInit,  ElementRef } from '@angular/core';
import { SettigsService } from 'src/app/services/service.index';




@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settigService: SettigsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(valorColor:string, link:ElementRef){
    
    this.aplicarCheck(link);
   
    this.settigService.aplicarTema(valorColor);
    this.settigService.guardarAjustes();
    
    
  }

  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working')
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');

    let tema = this.settigService.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}

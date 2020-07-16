import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RenuevaTokenGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router:Router){

  }
  canActivate():  Promise<boolean> | boolean  {
    
    let token = this.usuarioService.token;
    let payload = JSON.parse(atob(token.split('.')[1]));
    let expirado = this.expiracionToken(payload.exp);
    if (expirado) {
      return false
    } else {
      return this.verificaRenueva(payload.exp);
    }
  }
  

  verificaRenueva(ferchaEx: number): Promise<boolean>{
    return new Promise( ( resolve, reject )=>{
      let tokenExt = new Date(ferchaEx*1000);
      let ahora = new Date();
      ahora.setTime(ahora.getTime()+(2*60*60*1000))
      if (tokenExt.getTime()> ahora.getTime()) {
        resolve(true);
      }else{
        this.usuarioService.renuevaToken().subscribe((data)=>{
          resolve(true)
        }, err =>{ Swal.fire('Ha ocurrido un error debe ingresar de nuevo para validar sus datos :' +err),
           reject(false),  this.router.navigate(['/login'])  })
      }
      
    })
  }

  expiracionToken(fechaEx:number){
    let ahora = new Date().getTime()/1000;
    if (fechaEx < ahora) {
      return true
    }else{
      false
    }
  }
  
}

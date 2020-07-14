import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public usuarioService:UsuarioService, private route:Router){}
  canActivate()  {
    if (this.usuarioService.usuarioLog.role === 'ADMIN_ROLE') {
      
      return true
      
    } else {
      console.log('Bloqueado admin guard');
      this.route.navigate(['/perfil'])
      Swal.fire('No es usuario Administrativo', 'Para acceder comuniquese con el administrador')
      return false
    }
  }
  
}

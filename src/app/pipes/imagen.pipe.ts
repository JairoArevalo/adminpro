import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario' ): unknown {
    let url = URL_SERVICIOS+'/imagenes';

    if (!img) {
      return url+'/usuarios/XXXXXXXX';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url+=`/usuarios/${img}`;
        break;
        //
      case 'medico':
        url+=`/medicos/${img}`;
        break;
        //
      case 'hospital':
        url+=`/hospitales/${img}`;
        break;


      default:
        console.log('Tipo de img no existe: [usuario, medico, hospital]');
        url+='/usuarios/XXXXXX';
        break;
    }

    
    
    return url;
  }

}

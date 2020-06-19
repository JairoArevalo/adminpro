import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from "rxjs/operators";
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  tituloPage:string ='';
  tituloOrigen = this.title.getTitle();
  constructor(private router: Router, private title:Title, private meta:Meta) {

    this.getDataRouter().subscribe((data)=>{
      
      this.tituloPage = data.titulo;
      this.title.setTitle( this.tituloOrigen +' - '+ this.tituloPage)
      let metaTag: MetaDefinition ={
        name:'Decripcion',
        content: ( this.tituloOrigen +' - '+ this.tituloPage) ,

      }

      this.meta.updateTag(metaTag);
    })
   }

  ngOnInit(): void {
  }


  getDataRouter(){
    return this.router.events.pipe(
      filter( eventos => eventos instanceof ActivationEnd ),
      filter( (eventos: ActivationEnd) => eventos.snapshot.firstChild == null ),
      map( (evento:ActivationEnd)=>{
        return evento.snapshot.data;
      } )
    )
  }

}

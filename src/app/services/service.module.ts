import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SharedService, SidebarService } from "./service.index";
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers:[
    SettigsService,
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }

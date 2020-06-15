import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ShareModule { }

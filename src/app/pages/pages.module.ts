import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { ShareModule } from '../share/share.module';
import { PipesModule } from '../pipes/pipes.module';

//Componentes :

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';






@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    ProgressComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingsComponent,
    ModalUploadComponent
    
  ],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    PipesModule
    
  ],
 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
  
})
export class PagesModule { }

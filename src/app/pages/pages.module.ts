import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { ShareModule } from '../share/share.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from "@angular/forms";
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    ProgressComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingsComponent
    
  ],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
  
})
export class PagesModule { }

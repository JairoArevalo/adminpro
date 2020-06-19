import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NofoundComponent } from './share/nofound/nofound.component';
import { PagesComponent } from './pages/pages/pages.component';
import { RegisterComponent } from './login/register/register.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';


const routes: Routes = [
  { 
    path: '', component: PagesComponent, children:[
      //Rutas hijas
      { path: 'dashboard', component: DashboardComponent ,data:{ titulo:'Dashboard'} },
      { path: 'progress', component: ProgressComponent,data:{ titulo:'Progress'} },
      { path: 'graficas1', component: Graficas1Component,data:{ titulo:'Graficas'} },
      { path: 'promesas', component:  PromesasComponent,data:{ titulo:'Promesas'}  },
      { path: 'rxjs', component: RxjsComponent ,data:{ titulo:'rxjs'}} ,
      { path: 'accountSettings', component: AccountSettingsComponent ,data:{ titulo:'Ajustes del Tema'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ] 
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NofoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

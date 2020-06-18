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


const routes: Routes = [
  { 
    path: '', component: PagesComponent, children:[
      //Rutas hijas
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      { path: 'accountSettings', component: AccountSettingsComponent },
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

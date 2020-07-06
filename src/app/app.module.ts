import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Modulo de servicios
import { ServiceModule } from './services/service.module';
//Modulo para manejar paginas internas
import { PagesModule } from './pages/pages.module';

//rutas
import { AppRoutingModule } from './app-routing.module';


//Servicios



//Componentes
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login.component';


import { NofoundComponent } from './share/nofound/nofound.component';







@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NofoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

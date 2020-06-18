import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Modulo de servicios
import { ServiceModule } from './services/service.module';
//Modulo para manejar paginas internas
import { PagesModule } from './pages/pages.module';

//rutas
import { AppRoutingModule } from './app-routing.module';


//Servicios



//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { NofoundComponent } from './share/nofound/nofound.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

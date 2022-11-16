import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminComponent } from './admin/admin.component';
// Creamos importación del modulo para usarlo en app.module
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    VacantesComponent,
    PostulacionesComponent,
    EmpresasComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

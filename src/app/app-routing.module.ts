import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { VacantesComponent } from './vacantes/vacantes.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full', redirectTo:'inicio'
  },
  {
    path:'inicio', component:InicioComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'postulaciones', component:PostulacionesComponent
  },
  {
    path:'empresas', component:EmpresasComponent
  },
  {
    path:'vacantes', component:VacantesComponent
  },
  //Cualquier otra ruta va redireccionar a Inicio
  {
    path:'**', redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

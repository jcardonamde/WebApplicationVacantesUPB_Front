import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Creo variable de tipo any por que desconocemos como viene la info o el tipo de dato
  datos: any;

  // Esto me permite generar consultas a los servicios
  constructor(private http:HttpClient) { }

  // Este método se crea cuando la plantilla es creada
  ngOnInit(): void {
    let url = "https://api.fabricasoftware.co/?angular";
    this.http.get(url)
    // Guardamos los datos de la API en la variable de datos creada inicialmente
    .subscribe(
      // Función anonima
      result => {
        this.datos = result;
      }
    );
  }

}

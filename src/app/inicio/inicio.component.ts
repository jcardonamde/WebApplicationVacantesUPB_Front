import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //Creo variable de tipo any por que desconocemos como viene la información o el tipo de dato
  datos:any;

  // Esto me permite generar consultas a los servicios
  constructor(private http:HttpClient) { }

  // Este método se ejecuta cuando la plantilla es creada
  ngOnInit(): void {

    //Enviamos token de autenticación
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJteUlkNDU3ODk2NjQxMzU1NSIsInN1YiI6IkpvbmF0aGFuQyIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2Njg2NTcwMjgsImV4cCI6MTY2ODY1NzYyOH0.rgsOj0rvJZXVK3uizqrQ3ZsEdjB2yqSlsQT4TxWj3CPiudSthOauVy_eHNqmOktj-9lQSMLmxgzzjFggiX4Mkg";

    //Agregamos encabezado de autorización
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+token
      })
    };

    // Definimos la ruta de la API que vamos a consumir
    let url = "http://localhost:8089/api/empresas";
    this.http.get(url, httpOptions)
    // Guardamos los datos de la API en la variable de datos creada inicialmente
    .subscribe(
      // Función anonima
      result => {
        this.datos = result;
      }
    );
  }
}


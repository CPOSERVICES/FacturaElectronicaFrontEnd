import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import 'rxjs/add/operator/map'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient,
               public router: Router ) { 
                this.cargarStorage();
  }

  estalogueado() {
    return ( this.token.length > 5 )? true : false;
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage ( id: string, token :string, usuario: Usuario) {
    localStorage.setItem('id+1', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ) );

    this.usuario = usuario;
    this.token = token;
  }


  login( usuario: Usuario, recordar: boolean = false ) {

    if ( recordar) {
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }

        let url = URL_SERVICIOS + '/login';
        return this.http.post( url, usuario )
              .map( (resp: any) => this.guardarStorage(resp.id, resp.token, resp.usuario)
              );
              
  }

  logout (){
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  
    crearUsuario ( usuario: Usuario) {
    
      let url = URL_SERVICIOS + '/usuarios';
    
       return this.http.post( url, usuario )
       .map( (resp: any) => {
                 Swal.fire(
                      'Usuario creado!',
                       usuario.email,
                      'success'
                 );
            return resp.usuario;
       });
    }

    


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  constructor( public router: Router,
               public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';

    if( this.email.length > 1){
      this.recuerdame = true;
    }
  }

  ingresar( forma: NgForm) {

    if ( forma.invalid){
      return;
    }
    let usuario =  new Usuario(
      1, 
      1, 
      '', 
      forma.value.password,
      forma.value.email,
      '',
      '',
      '',
      '',
    );
      
      this._usuarioService.login( usuario, forma.value.recuerdame )
                .subscribe( () => this.router.navigate(['/dashboard']) );
                

  }

}

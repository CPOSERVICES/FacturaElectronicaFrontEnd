import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( public _usuarioService: UsuarioService,
               public router: Router ) { }

  sonIguales( campo1: string, campo2: string ){
    return ( group: FormGroup ) => {
        
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null
      }
      return {
        sonIguales: true
      }
    }
    
  }

  ngOnInit() {

  this.forma = new FormGroup({
    nombre: new FormControl( null, Validators.required ),
    apellido: new FormControl( null, Validators.required ),
    email: new FormControl( null, [ Validators.required, Validators.email ] ),
    pass: new FormControl( null, Validators.required ),
    pass2: new FormControl( null, Validators.required ),
    condiciones: new FormControl( false )
  }, { validators: this.sonIguales('pass', 'pass2') } );

        this.forma.setValue({
          nombre: 'test1',
          apellido: 'test1',
          email: 'test10@test10.com',
          pass: '123456',
          pass2: '123456',
          condiciones: true
        });

  }

  registraUsuario(){
    if ( this.forma.invalid ){
      return;
    }

    if ( !this.forma.value.condiciones ) {
      Swal.fire({
        title: 'Importante!',
        text: 'Debe aceptar las condiciones',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      return;
    }
    
    let usuario = new Usuario (
      
       1,
       1,
      'S/N',
      this.forma.value.pass,
      this.forma.value.email,
      this.forma.value.nombre,
      this.forma.value.apellido,
      '1',
      '1',
      
      
    );

    this._usuarioService.crearUsuario( usuario )
            .subscribe( resp => this.router.navigate(['/login']) );
    
  }

}

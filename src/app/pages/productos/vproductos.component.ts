import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vproductos',
  templateUrl: './vproductos.component.html',
  styleUrls: ['/productos.component.css']
})
export class VproductosComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  nuevoProducto(){
this.router.navigate(['/nuevoProducto'])
  }

}

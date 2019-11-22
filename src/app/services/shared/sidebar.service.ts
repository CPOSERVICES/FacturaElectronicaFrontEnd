import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any = [

    {
      titulo: 'Documentos Eléctronicos',
      icono: 'ti-files',
      submenu: [
        { titulo: 'Facturas', url: '' },
        { titulo: 'Notas de Débito', url: '' },
        { titulo: 'Notas de Crédito', url: '' },
        { titulo: 'Guias', url: '' },
        { titulo: 'Retenciones', url: '' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'ti-notepad',
      submenu: [
        { titulo: 'Cotizaciones', url: '' },
        { titulo: 'Clientes', url: '' },
        { titulo: 'Cobros', url: '' }
      ]
    },
    {
      titulo: 'Compras',
      icono: 'ti-shopping-cart',
      submenu: [
        { titulo: 'Proveedores', url: '' },
        { titulo: 'Pagos', url: '' },
      ]
    },
    {
      titulo: 'Inventarios',
      icono: 'ti-package',
      submenu: [
        { titulo: 'Productos', url: '/verProducto' },
      ]
    },
    {
      titulo: 'Contabilidad',
      icono: 'ti-email',
      submenu: [
        { titulo: 'ATS', url: '' },
      ]
    },
  ];

  constructor() { }
}

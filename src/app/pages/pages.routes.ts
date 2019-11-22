import { RouterModule, Routes } from "@angular/router";

import { LoginGuardGuard } from '../services/service.index';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NproductosComponent } from './productos/nproductos.component';
import { VproductosComponent } from './productos/vproductos.component';

 const pagesRoutes : Routes = [
     { 
         path: '', 
         component: PagesComponent,
         canActivate: [ LoginGuardGuard ],
         children: [
             { path: 'dashboard', component: DashboardComponent },
             { path: 'nuevoProducto', component: NproductosComponent },
             { path: 'verProducto', component: VproductosComponent },
             { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
         ]
     }
 ];

 export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
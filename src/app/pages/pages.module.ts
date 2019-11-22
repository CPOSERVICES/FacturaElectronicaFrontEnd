import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VproductosComponent } from './productos/vproductos.component';
import { NproductosComponent } from './productos/nproductos.component';





@NgModule({
    declarations: [
         PagesComponent,
         DashboardComponent,
         VproductosComponent,
         NproductosComponent,

    ],
    exports: [
        DashboardComponent,
        VproductosComponent,
        NproductosComponent,

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,



    ],
    providers:[
    ]
})
export class PagesModule{}
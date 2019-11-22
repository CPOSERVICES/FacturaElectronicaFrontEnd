import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
    declarations: [
       HeaderComponent,
       SidebarComponent,
       BreadcrumbComponent,
       NopagefoundComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent,
        NopagefoundComponent
    ]
})
export class SharedModule{}
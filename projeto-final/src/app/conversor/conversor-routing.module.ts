import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorComponent } from './components';

export const ConversorRoutes: Routes = [
    {
        path: 'conversor-moedas',
        component: ConversorComponent
    }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(ConversorRoutes)
    ],
    exports: [ 
        RouterModule
    ] 
})
export class ConversorRoutingModule {}
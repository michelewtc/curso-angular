import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorRoutes } from './conversor/conversor-routing.module';
import { TarefasRoutes } from './tarefas/tarefas-routing.module';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...ConversorRoutes,
    ...TarefasRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})
export class AppRoutingModule {}
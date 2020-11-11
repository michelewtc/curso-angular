import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';
import { MoedaService } from './services';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService
  ]
})
export class ConversorModule { }

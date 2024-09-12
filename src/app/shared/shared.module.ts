import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    SharedComponentsModule, 
    MatSlideToggleModule
  ]
})
export class SharedModule { }

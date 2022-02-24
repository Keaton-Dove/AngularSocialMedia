import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveButtonComponent } from './buttons';


@NgModule({
  declarations: [
    SaveButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaveButtonComponent
  ]
})
export class ResourcesModule { }

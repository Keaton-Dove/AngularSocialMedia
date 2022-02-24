import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveButtonComponent } from './buttons';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SaveButtonComponent
  ]
})
export class ResourcesModule { }

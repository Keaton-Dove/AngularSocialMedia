import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorFormatComponent } from './error-format.component';
import { SaveButtonComponent } from './buttons';
import { AuthViewDirective } from './auth-view.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SaveButtonComponent,
    ErrorFormatComponent,
    AuthViewDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SaveButtonComponent,
    ErrorFormatComponent,
    AuthViewDirective
  ]
})
export class ResourcesModule { }

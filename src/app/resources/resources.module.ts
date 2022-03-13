import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ErrorFormatComponent } from './error-format.component';
import { SaveButtonComponent } from './buttons';
import { AuthViewDirective } from './auth-view.directive';
import { PostViewComponent, PostViewListComponent } from './post-view';

@NgModule({
  declarations: [
    SaveButtonComponent,
    ErrorFormatComponent,
    AuthViewDirective,
    PostViewComponent,
    PostViewListComponent
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

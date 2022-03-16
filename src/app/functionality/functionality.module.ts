import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService, UserService, DataService, PostService } from './services';
import { UserValidator } from './validators';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
    HttpService,
    PostService,
    UserService,
    UserValidator
  ]
})
export class FunctionalityModule { }

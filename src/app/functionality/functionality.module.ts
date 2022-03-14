import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesService, HttpService, UserService, DataService, PostService } from './services';
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
    ProfilesService,
    UserService,
    UserValidator
  ]
})
export class FunctionalityModule { }

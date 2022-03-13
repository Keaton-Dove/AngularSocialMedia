import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesService, HttpService, UserService, DataService, PostService } from './services';


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
    UserService
  ]
})
export class FunctionalityModule { }

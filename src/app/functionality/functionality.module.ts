import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesService, HttpService, UserService, DataService } from './services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
    HttpService,
    ProfilesService,
    UserService
  ]
})
export class FunctionalityModule { }
